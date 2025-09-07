import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Shield, Eye, Lock } from "lucide-react";

const PrivacyPolicy = () => {
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
                  Privacy Policy
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Last updated: {lastUpdated}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Highlights */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center">
                  <CardHeader>
                    <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Data Protection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We use industry-standard encryption and security measures to protect your data.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <Eye className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Transparency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We're clear about what data we collect and how we use it for your benefit.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <Lock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Your Control</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      You have control over your data with options to access, modify, or delete it.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              <div className="space-y-12">
                
                {/* Introduction */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">1. Introduction</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Azarus ERP ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our ERP platform and related services.
                    </p>
                    <p>
                      By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, do not use our services.
                    </p>
                  </div>
                </div>

                {/* Information We Collect */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">2. Information We Collect</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        We may collect personal information that you provide directly to us, including:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Name, email address, and contact information</li>
                        <li>Account credentials and authentication information</li>
                        <li>Payment and billing information</li>
                        <li>Business information and company details</li>
                        <li>Communications and support interactions</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">2.2 Business Data</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        As part of our ERP services, we process business data you input into our platform:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Customer and vendor information</li>
                        <li>Financial records and transaction data</li>
                        <li>Inventory and product information</li>
                        <li>Employee and HR data</li>
                        <li>Operational and analytical data</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">2.3 Technical Information</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        We automatically collect certain technical information:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>IP addresses and device information</li>
                        <li>Browser type and version</li>
                        <li>Usage patterns and feature interactions</li>
                        <li>Performance and error logs</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* How We Use Information */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">3. How We Use Your Information</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>We use the collected information for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide, maintain, and improve our ERP services</li>
                      <li>Process transactions and manage billing</li>
                      <li>Authenticate users and prevent unauthorized access</li>
                      <li>Provide customer support and respond to inquiries</li>
                      <li>Send important service notifications and updates</li>
                      <li>Analyze usage patterns to improve our platform</li>
                      <li>Comply with legal obligations and enforce our terms</li>
                      <li>Protect against fraud and security threats</li>
                    </ul>
                  </div>
                </div>

                {/* Data Sharing */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">4. How We Share Your Information</h2>
                  <div className="space-y-6">
                    <div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        We do not sell, trade, or rent your personal information. We may share information in the following circumstances:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li><strong>Service Providers:</strong> With trusted third-party vendors who help us operate our platform</li>
                        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                        <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                        <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Data Security */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">5. Data Security</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We implement comprehensive security measures to protect your information:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>End-to-end encryption for data in transit and at rest</li>
                      <li>Multi-factor authentication and access controls</li>
                      <li>Regular security audits and vulnerability assessments</li>
                      <li>Employee training on data protection best practices</li>
                      <li>Incident response procedures for security breaches</li>
                      <li>Compliance with industry security standards</li>
                    </ul>
                  </div>
                </div>

                {/* Your Rights */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">6. Your Privacy Rights</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>You have the following rights regarding your personal information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Access:</strong> Request a copy of your personal data</li>
                      <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                      <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
                      <li><strong>Objection:</strong> Object to certain processing activities</li>
                      <li><strong>Restriction:</strong> Limit how we process your information</li>
                    </ul>
                    <p className="mt-4">
                      To exercise these rights, please contact us at privacy@azarus.com. We will respond to your request within 30 days.
                    </p>
                  </div>
                </div>

                {/* Data Retention */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">7. Data Retention</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We retain your information only as long as necessary to provide our services and comply with legal obligations:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Account data is retained while your account is active</li>
                      <li>Business data is retained according to your data retention settings</li>
                      <li>Payment information is retained for tax and accounting purposes</li>
                      <li>Support communications are retained for quality assurance</li>
                      <li>Log data is typically retained for 12 months</li>
                    </ul>
                  </div>
                </div>

                {/* International Transfers */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">8. International Data Transfers</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Our services are operated globally. Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Standard contractual clauses approved by regulatory authorities</li>
                      <li>Adequacy decisions for certain countries</li>
                      <li>Certification under privacy frameworks like Privacy Shield successors</li>
                    </ul>
                  </div>
                </div>

                {/* Changes to Policy */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">9. Changes to This Policy</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We may update this Privacy Policy from time to time. We will notify you of any material changes by:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Posting the updated policy on our website</li>
                      <li>Sending an email notification to registered users</li>
                      <li>Displaying a prominent notice in our application</li>
                    </ul>
                    <p className="mt-4">
                      Your continued use of our services after any changes indicates your acceptance of the updated policy.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">10. Contact Us</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                    </p>
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <p><strong>Email:</strong> privacy@azarus.com</p>
                      <p><strong>Address:</strong> Azarus ERP Inc., 123 Business Ave, San Francisco, CA 94105</p>
                      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                      <p><strong>Data Protection Officer:</strong> dpo@azarus.com</p>
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

export default PrivacyPolicy;