import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Shield, AlertTriangle } from "lucide-react";

const TermsOfService = () => {
  const lastUpdated = "March 1, 2024";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-hero-gradient text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          <div className="container-wide relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Terms of Service
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  These terms govern your use of Azarus ERP services. Please read them carefully.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Last updated: {lastUpdated}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Points */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center">
                  <CardHeader>
                    <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Service Agreement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      By using our services, you agree to these terms and our service level commitments.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Your Rights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      You retain ownership of your data and have specific rights regarding our services.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <AlertTriangle className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Responsibilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Both parties have responsibilities to ensure proper use of the platform.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              <div className="space-y-12">
                
                {/* Introduction */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">1. Introduction and Acceptance</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      These Terms of Service ("Terms") constitute a legal agreement between you ("Customer" or "you") and Azarus ERP Inc. ("Azarus," "we," "us," or "our") governing your use of our enterprise resource planning software and related services.
                    </p>
                    <p>
                      By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, you may not use our services.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-amber-800 font-medium">
                        <AlertTriangle className="inline h-4 w-4 mr-2" />
                        Important: These terms include binding arbitration and class action waiver provisions that affect your legal rights.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Description */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">2. Service Description</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">2.1 Platform Services</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Azarus provides cloud-based ERP software including but not limited to:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Customer Relationship Management (CRM)</li>
                        <li>Financial Management and Accounting</li>
                        <li>Human Resources and Payroll</li>
                        <li>Inventory and Supply Chain Management</li>
                        <li>Project Management and Collaboration</li>
                        <li>Business Intelligence and Reporting</li>
                        <li>API access and integrations</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">2.2 Service Availability</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We strive to maintain 99.9% uptime but do not guarantee uninterrupted service. Scheduled maintenance will be announced in advance when possible.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Account Registration */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">3. Account Registration and Security</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">3.1 Account Requirements</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        To use our services, you must:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Provide accurate and complete registration information</li>
                        <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
                        <li>Have the authority to bind your organization to these Terms</li>
                        <li>Maintain the security and confidentiality of your account credentials</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">3.2 Account Security</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You are responsible for all activities under your account. You must immediately notify us of any unauthorized access or security breaches.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Acceptable Use */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">4. Acceptable Use Policy</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">4.1 Permitted Uses</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You may use our services for lawful business purposes in accordance with these Terms and applicable laws.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">4.2 Prohibited Activities</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        You may not:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Use the services for any illegal or unauthorized purpose</li>
                        <li>Attempt to reverse engineer, decompile, or hack our services</li>
                        <li>Upload malicious code, viruses, or harmful content</li>
                        <li>Interfere with or disrupt our services or servers</li>
                        <li>Access data belonging to other customers</li>
                        <li>Use our services to send spam or unsolicited communications</li>
                        <li>Violate any applicable laws or regulations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Data and Privacy */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">5. Data Ownership and Privacy</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">5.1 Your Data</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You retain all rights, title, and interest in your business data. We do not claim ownership of any data you upload to our platform.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">5.2 Data Processing</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We process your data solely to provide our services as described in our Privacy Policy. We implement appropriate security measures to protect your data.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">5.3 Data Backup and Recovery</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We perform regular backups of your data. However, you are responsible for maintaining your own backup copies of critical data.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payment Terms */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">6. Payment and Billing</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">6.1 Fees and Charges</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You agree to pay all fees associated with your selected plan. Fees are charged in advance and are non-refundable except as required by law.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">6.2 Payment Methods</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We accept major credit cards and other payment methods as displayed in our billing interface. You authorize us to charge your selected payment method.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">6.3 Late Payment</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Overdue accounts may be suspended after 7 days. We may charge late fees and interest on overdue amounts as permitted by law.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Intellectual Property */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">7. Intellectual Property Rights</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">7.1 Our Rights</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Azarus owns all rights, title, and interest in our software, platform, documentation, and related intellectual property.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">7.2 License to You</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We grant you a limited, non-exclusive, non-transferable license to use our services during your subscription term.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">7.3 Feedback</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Any feedback, suggestions, or improvements you provide may be used by us without restriction or compensation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Warranties and Disclaimers */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">8. Warranties and Disclaimers</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">8.1 Service Warranty</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We warrant that our services will perform substantially in accordance with our published documentation.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">8.2 Disclaimers</h3>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <p className="text-gray-800 font-medium text-sm uppercase tracking-wide">
                          EXCEPT AS EXPRESSLY STATED, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Limitation of Liability */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">9. Limitation of Liability</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800 font-medium text-sm uppercase tracking-wide">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, AZARUS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS OR BUSINESS INTERRUPTION.
                      </p>
                    </div>
                    <p>
                      Our total liability for any claims arising from these Terms or your use of our services shall not exceed the amount you paid us in the 12 months preceding the claim.
                    </p>
                  </div>
                </div>

                {/* Termination */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">10. Termination</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">10.1 Termination by You</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You may terminate your account at any time through your account settings or by contacting support.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">10.2 Termination by Us</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We may suspend or terminate your account for violation of these Terms, non-payment, or other reasons with appropriate notice.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">10.3 Effect of Termination</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Upon termination, your access will cease and we will delete your data within 30 days unless legally required to retain it.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Governing Law */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">11. Governing Law and Disputes</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      These Terms are governed by the laws of the State of California, without regard to conflict of law principles.
                    </p>
                    <p>
                      Any disputes will be resolved through binding arbitration in San Francisco, California, except for claims of intellectual property infringement.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">12. Contact Information</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      For questions about these Terms, please contact us:
                    </p>
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <p><strong>Email:</strong> legal@azarus.com</p>
                      <p><strong>Address:</strong> Azarus ERP Inc., 123 Business Ave, San Francisco, CA 94105</p>
                      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;