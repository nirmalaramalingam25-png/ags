import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Loader2, Upload, CheckCircle, XCircle } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  address: z.string().min(5, "Address is required"),
  message: z.string().optional(),
  resume: z.any().optional(), // Handling file separately usually, but basic validation here
});

interface ContactFormProps {
  withResume?: boolean;
  onSuccess?: () => void;
  specializationId?: string;
}

export default function ContactForm({ withResume = false, onSuccess, specializationId }: ContactFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadStatus('uploading');
      // Simulate upload delay
      setTimeout(() => {
        // Simulate success/failure randomly for demo
        if (file.size > 10 * 1024 * 1024) { // 10MB limit
          setUploadStatus('error');
          toast({
            title: "Upload Failed",
            description: "File size exceeds 10MB limit.",
            variant: "destructive",
          });
        } else {
          setUploadedFile(file);
          setUploadStatus('success');
          toast({
            title: "Upload Successful",
            description: `${file.name} has been uploaded successfully.`,
          });
        }
      }, 1500);
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      
      // Store in local storage for "Admin" demo
      const existing = JSON.parse(localStorage.getItem('inquiries') || '[]');
      existing.push({
        ...values,
        id: Date.now(),
        date: new Date().toISOString(),
        resumeName: withResume && uploadedFile ? uploadedFile.name : null
      });
      localStorage.setItem('inquiries', JSON.stringify(existing));

      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We've received your details and will contact you shortly.",
      });
      form.reset();
      if (onSuccess) onSuccess();
    }, 1500);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+1 (555) 000-0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Main St, City, State, ZIP" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {withResume && (
          <FormItem>
            <FormLabel>Resume / CV</FormLabel>
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer relative">
              {uploadStatus === 'idle' && (
                <>
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">PDF, DOCX up to 10MB</p>
                </>
              )}
              {uploadStatus === 'uploading' && (
                <>
                  <Loader2 className="h-8 w-8 text-muted-foreground mb-2 animate-spin" />
                  <p className="text-sm text-muted-foreground">Uploading...</p>
                </>
              )}
              {uploadStatus === 'success' && (
                <>
                  <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                  <p className="text-sm text-green-600">{uploadedFile?.name}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">Upload successful</p>
                </>
              )}
              {uploadStatus === 'error' && (
                <>
                  <XCircle className="h-8 w-8 text-red-500 mb-2" />
                  <p className="text-sm text-red-600">Upload failed</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">Try again</p>
                </>
              )}
              <Input
                type="file"
                accept=".pdf,.docx"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                disabled={uploadStatus === 'uploading'}
              />
            </div>
          </FormItem>
        )}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (Optional)</FormLabel>
              <FormControl>
                <Textarea placeholder="How can we help you?" className="min-h-[100px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
}
