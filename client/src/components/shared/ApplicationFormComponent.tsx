import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText } from "lucide-react";

const applicationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  position: z.string().min(1, "Position is required"),
  resume: z.any().optional(),
  coverLetter: z.string().optional(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

interface ApplicationFormProps {
  specializationId: string;
  onSuccess?: () => void;
}

export default function ApplicationFormComponent({ specializationId, onSuccess }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      position: specializationId,
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        toast({
          title: "File too large",
          description: "Please select a file smaller than 10MB.",
          variant: "destructive",
        });
        return;
      }
      setResumeFile(file);
      setValue("resume", file);
    }
  };

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("position", data.position);
      formData.append("specializationId", specializationId);
      if (data.coverLetter) {
        formData.append("coverLetter", data.coverLetter);
      }
      if (resumeFile) {
        formData.append("resume", resumeFile);
      }

      const response = await fetch("/api/applications", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Application submitted successfully!",
          description: "We'll review your application and get back to you soon.",
        });
        onSuccess?.();
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      toast({
        title: "Error submitting application",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitting) {
    return (
      <div className="flex justify-center items-center py-8">
        <Spinner />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            {...register("fullName")}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="text-sm text-red-500 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            {...register("phone")}
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="position">Position Interested In *</Label>
          <Input
            id="position"
            {...register("position")}
            placeholder="Position you're applying for"
            readOnly
          />
          {errors.position && (
            <p className="text-sm text-red-500 mt-1">{errors.position.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
        <Textarea
          id="coverLetter"
          {...register("coverLetter")}
          placeholder="Tell us why you're interested in this position..."
          rows={4}
        />
      </div>

      <div>
        <Label htmlFor="resume">Resume/CV *</Label>
        <div className="mt-1">
          <input
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
          <Label
            htmlFor="resume"
            className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
          >
            <div className="text-center">
              <Upload className="mx-auto h-8 w-8 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">
                {resumeFile ? resumeFile.name : "Click to upload your resume"}
              </p>
              <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
            </div>
          </Label>
        </div>
        {resumeFile && (
          <div className="mt-2 flex items-center gap-2 text-sm text-green-600">
            <FileText size={16} />
            {resumeFile.name}
          </div>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
