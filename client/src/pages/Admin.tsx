import Navbar from "@/components/layout/Navbar";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Trash2, Download } from "lucide-react";

interface Inquiry {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  resumeName: string | null;
}

export default function Admin() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('inquiries') || '[]');
    setInquiries(data);
  }, []);

  const handleDelete = (id: number) => {
    const newData = inquiries.filter(i => i.id !== id);
    setInquiries(newData);
    localStorage.setItem('inquiries', JSON.stringify(newData));
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-3xl font-heading font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground mb-8">View recent inquiries and resume uploads.</p>

        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role / Resume</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inquiries.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-12 text-muted-foreground">
                    No inquiries yet. Submit a form on the Contact or Specialization pages to see data here.
                  </TableCell>
                </TableRow>
              ) : (
                inquiries.map((inquiry) => (
                  <TableRow key={inquiry.id}>
                    <TableCell className="text-muted-foreground text-sm">
                      {inquiry.date ? format(new Date(inquiry.date), 'MMM d, yyyy') : 'N/A'}
                    </TableCell>
                    <TableCell className="font-medium">
                      {inquiry.firstName} {inquiry.lastName}
                    </TableCell>
                    <TableCell>{inquiry.email}</TableCell>
                    <TableCell>
                      {inquiry.resumeName ? (
                        <div className="flex items-center gap-2 text-primary font-medium">
                           <Download size={14} />
                           {inquiry.resumeName}
                        </div>
                      ) : (
                        <span className="text-muted-foreground italic">No resume</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => handleDelete(inquiry.id)}
                      >
                        <Trash2 size={18} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
