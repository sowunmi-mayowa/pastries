"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useTranslations } from "@/components/LanguageProvider";

export default function PreOrderForm() {
  const tr = useTranslations();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    product: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSuccess(true);
    setIsSubmitting(false);

    toast.success(tr.preorder.toastTitle, {
      description: tr.preorder.toastDesc,
    });

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", email: "", date: "", product: "" });
    }, 3000);
  };

  const products = tr.preorder.products;

  return (
    <>
      <Toaster />
      <section id="order" ref={sectionRef} className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div
              className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <span className="text-sm tracking-[0.3em] text-[#B8956A] font-medium uppercase mb-4 block">
                {tr.preorder.smallLabel}
              </span>
              <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-[#2C1810] mb-6">
                {tr.preorder.title}
              </h2>
              <p className="text-lg text-[#5C4A3A] max-w-2xl mx-auto">
                {tr.preorder.paragraph}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={`transition-all duration-1000 delay-200 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-[4/5] bg-gradient-to-br from-[#F5E8D8] to-[#E8D5C4]">
                    <img
                      src="https://images.pexels.com/photos/1407491/pexels-photo-1407491.jpeg?auto=compress&cs=tinysrgb&w=1200"
                      alt="Pâtisseries fraîches"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {tr.preorder.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#B8956A] mt-2 flex-shrink-0"></div>
                      <p className="text-[#5C4A3A]">
                        <span className="font-semibold text-[#2C1810]">
                          {b.strong}
                        </span>
                        {b.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-300 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
              >
                {isSuccess ? (
                  <div className="bg-gradient-to-br from-[#F5E8D8] to-[#FFF8F0] rounded-2xl p-12 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-playfair text-3xl text-[#2C1810] mb-4">
                      {tr.preorder.successTitle}
                    </h3>
                    <p className="text-[#5C4A3A] text-lg">
                      {tr.preorder.successText}
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-gradient-to-br from-[#FFF8F0] to-white rounded-2xl p-8 shadow-xl"
                  >
                    <div className="space-y-6">
                      <div>
                        <Label
                          htmlFor="name"
                          className="text-[#2C1810] font-medium mb-2 block"
                        >
                          {tr.preorder.fields.name}
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="h-12 border-[#E8D5C4] focus:border-[#B8956A] focus:ring-[#B8956A] rounded-lg"
                          placeholder={tr.preorder.fields.namePlaceholder}
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="email"
                          className="text-[#2C1810] font-medium mb-2 block"
                        >
                          {tr.preorder.fields.email}
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="h-12 border-[#E8D5C4] focus:border-[#B8956A] focus:ring-[#B8956A] rounded-lg"
                          placeholder={tr.preorder.fields.emailPlaceholder}
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="date"
                          className="text-[#2C1810] font-medium mb-2 block"
                        >
                          {tr.preorder.fields.date}
                        </Label>
                        <div className="relative">
                          <Input
                            id="date"
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) =>
                              setFormData({ ...formData, date: e.target.value })
                            }
                            className="h-12 border-[#E8D5C4] focus:border-[#B8956A] focus:ring-[#B8956A] rounded-lg"
                            min={
                              new Date(Date.now() + 86400000)
                                .toISOString()
                                .split("T")[0]
                            }
                          />
                          <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8B6F47] pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <Label
                          htmlFor="product"
                          className="text-[#2C1810] font-medium mb-2 block"
                        >
                          {tr.preorder.fields.product}
                        </Label>
                        <Select
                          value={formData.product}
                          onValueChange={(value) =>
                            setFormData({ ...formData, product: value })
                          }
                        >
                          <SelectTrigger className="h-12 border-[#E8D5C4] focus:border-[#B8956A] focus:ring-[#B8956A] rounded-lg">
                            <SelectValue
                              placeholder={
                                tr.preorder.fields.productPlaceholder
                              }
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {products.map((product) => (
                              <SelectItem key={product} value={product}>
                                {product}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-[#2C1810] hover:bg-[#3D2415] text-white rounded-lg text-base font-medium transition-all duration-300 hover:shadow-lg disabled:opacity-50"
                      >
                        {isSubmitting
                          ? tr.preorder.fields.submitting
                          : tr.preorder.fields.submit}
                      </Button>

                      <p className="text-sm text-[#8B6F47] text-center">
                        {tr.preorder.contactNote}
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
