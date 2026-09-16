import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface FieldConfig {
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}

interface ContactFormProps {
  fields: Record<string, FieldConfig>;
  submitButtonText: string;
  web3FormsKey: string;
}

// TODO: Evitar el hardcodeo de la data y agregarlo al data.ts
export function ContactForm({
  fields,
  submitButtonText,
  web3FormsKey,
}: ContactFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", web3FormsKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsOpen(true);
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Card className="bg-card/80 border-border/5 w-full max-w-120 backdrop-blur-md">
        <CardContent className="">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {Object.entries(fields).map(([fieldName, field]) => (
              <div key={fieldName} className="grid gap-2">
                <Label htmlFor={fieldName}>{field.label}</Label>

                {/* 2. Verifica si el tipo es textarea */}
                {field.type === "textarea" ? (
                  <Textarea
                    id={fieldName}
                    name={fieldName}
                    placeholder={field.placeholder}
                    required={field.required}
                    rows={5}
                    className="input-saas resize-none"
                  />
                ) : (
                  <Input
                    id={fieldName}
                    name={fieldName}
                    placeholder={field.placeholder}
                    required={field.required}
                    type={field.type}
                    className="input-saas"
                  />
                )}
              </div>
            ))}
            <Button
              type="submit"
              className="btn-saas w-full"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : submitButtonText}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>¡Correo enviado correctamente!</DialogTitle>
            <DialogDescription>
              Gracias por escribirme. Responderé a tu mensaje lo antes posible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="button" onClick={() => setIsOpen(false)}>
              Entendido
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
