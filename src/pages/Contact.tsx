import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MessageSquare, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t("contact.form.title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">{t("contact.form.firstName")}</Label>
                    <Input id="firstName" placeholder={t("contact.form.placeholders.firstName")} />
                  </div>
                  <div>
                    <Label htmlFor="lastName">{t("contact.form.lastName")}</Label>
                    <Input id="lastName" placeholder={t("contact.form.placeholders.lastName")} />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">{t("contact.form.email")}</Label>
                  <Input id="email" type="email" placeholder={t("contact.form.placeholders.email")} />
                </div>
                
                <div>
                  <Label htmlFor="company">{t("contact.form.company")}</Label>
                  <Input id="company" placeholder={t("contact.form.placeholders.company")} />
                </div>
                
                <div>
                  <Label htmlFor="message">{t("contact.form.message")}</Label>
                  <Textarea 
                    id="message" 
                    placeholder={t("contact.form.placeholders.message")}
                    rows={5}
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  {t("contact.form.sendMessage")}
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div className="grid gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                     <div>
                       <h3 className="font-semibold text-lg">{t("contact.info.sales.title")}</h3>
                       <p className="text-muted-foreground">{t("contact.info.sales.description")}</p>
                       <p className="text-primary font-medium">info@azaruserp.com</p>
                     </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                     <div>
                       <h3 className="font-semibold text-lg">{t("contact.info.support.title")}</h3>
                       <p className="text-muted-foreground">{t("contact.info.support.description")}</p>
                       <p className="text-primary font-medium">info@azaruserp.com</p>
                     </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                     <div>
                       <h3 className="font-semibold text-lg">{t("contact.info.phone.title")}</h3>
                       <p className="text-muted-foreground">{t("contact.info.phone.description")}</p>
                       <p className="text-primary font-medium">+44 1865 60 0679</p>
                     </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;