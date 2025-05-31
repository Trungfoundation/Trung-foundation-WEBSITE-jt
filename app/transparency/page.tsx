import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FileText, PieChart, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DownloadButton from "@/components/download-button"

export default function TransparencyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/healthcare-2.jpg"
          alt="Transparency & Reports"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Transparency & Reports</h1>
          <p className="text-xl text-white max-w-2xl">Our commitment to accountability and responsible stewardship</p>
        </div>
      </section>

      {/* Financial Overview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Financial Stewardship</h2>
            <p className="text-muted-foreground">
              We are committed to transparency in how we use donor funds. Our financial reports are published annually
              and available for public review. We strive to maximize the impact of every donation by maintaining
              efficient operations and directing the majority of funds to our programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <PieChart className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">85%</h3>
              <p className="text-muted-foreground">Program Expenses</p>
              <p className="text-sm text-muted-foreground mt-2">
                85% of all donations go directly to our education, healthcare, and community development programs.
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">10%</h3>
              <p className="text-muted-foreground">Administrative Costs</p>
              <p className="text-sm text-muted-foreground mt-2">
                10% supports our administrative operations, ensuring effective management and governance.
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">5%</h3>
              <p className="text-muted-foreground">Fundraising</p>
              <p className="text-sm text-muted-foreground mt-2">
                5% is invested in fundraising efforts to sustain and grow our impact in communities.
              </p>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Financial Accountability</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our foundation undergoes an annual independent audit to ensure financial accuracy and compliance with
                  accounting standards. The audit is conducted by a reputable accounting firm with expertise in
                  nonprofit organizations.
                </p>
                <p>
                  We maintain strict internal controls and follow best practices in financial management. Our board of
                  directors provides oversight of our financial operations and reviews detailed financial reports
                  quarterly.
                </p>
                <div className="pt-4">
                  <DownloadButton fileType="report" fileName="audited-financials-2024">
                    View Our Audited Financials <ArrowRight className="ml-2 h-4 w-4" />
                  </DownloadButton>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image src="/images/healthcare-2.jpg" alt="Financial Accountability" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Annual Reports</h2>

          <Tabs defaultValue="2024" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="2024">2024</TabsTrigger>
              <TabsTrigger value="2023">2023</TabsTrigger>
              <TabsTrigger value="2022">2022</TabsTrigger>
              <TabsTrigger value="2021">2021</TabsTrigger>
            </TabsList>

            <TabsContent value="2024">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                        <Image src="/images/healthcare-3.jpg" alt="2024 Annual Report" fill className="object-cover" />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold mb-4">2024 Annual Report</h3>
                      <div className="space-y-4 text-muted-foreground mb-6">
                        <p>
                          Our 2024 Annual Report highlights the significant progress we've made in our key program
                          areas: education, healthcare, and community development. This year, we expanded our reach to 5
                          new communities and launched 2 new initiatives focused on digital literacy and maternal
                          health.
                        </p>
                        <p>
                          The report includes detailed information about our programs, beneficiary stories, financial
                          statements, and acknowledgment of our generous donors and partners who make our work possible.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b pb-3">
                          <div>
                            <h4 className="font-semibold">Full Annual Report (PDF)</h4>
                            <p className="text-sm text-muted-foreground">Complete report with financial statements</p>
                          </div>
                          <DownloadButton
                            fileType="report"
                            fileName="annual-report-2024-full"
                            variant="outline"
                            size="sm"
                          >
                            Download
                          </DownloadButton>
                        </div>
                        <div className="flex items-center justify-between border-b pb-3">
                          <div>
                            <h4 className="font-semibold">Impact Summary (PDF)</h4>
                            <p className="text-sm text-muted-foreground">
                              Condensed overview of our impact and achievements
                            </p>
                          </div>
                          <DownloadButton
                            fileType="report"
                            fileName="annual-report-2024-summary"
                            variant="outline"
                            size="sm"
                          >
                            Download
                          </DownloadButton>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold">Financial Statements (PDF)</h4>
                            <p className="text-sm text-muted-foreground">Detailed financial information</p>
                          </div>
                          <DownloadButton
                            fileType="report"
                            fileName="financial-statements-2024"
                            variant="outline"
                            size="sm"
                          >
                            Download
                          </DownloadButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="2023">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                        <Image
                          src="/images/medical-camp-2.jpg"
                          alt="2023 Annual Report"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold mb-4">2023 Annual Report</h3>
                      <div className="space-y-4 text-muted-foreground mb-6">
                        <p>
                          In 2023, our foundation focused on strengthening our core programs and improving their
                          effectiveness. We implemented new monitoring and evaluation systems to better track our impact
                          and make data-driven decisions about program improvements.
                        </p>
                        <p>
                          The report details our accomplishments, challenges, and lessons learned throughout the year,
                          along with comprehensive financial information and recognition of our supporters.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b pb-3">
                          <div>
                            <h4 className="font-semibold">Full Annual Report (PDF)</h4>
                            <p className="text-sm text-muted-foreground">Complete report with financial statements</p>
                          </div>
                          <DownloadButton
                            fileType="report"
                            fileName="annual-report-2023-full"
                            variant="outline"
                            size="sm"
                          >
                            Download
                          </DownloadButton>
                        </div>
                        <div className="flex items-center justify-between border-b pb-3">
                          <div>
                            <h4 className="font-semibold">Impact Summary (PDF)</h4>
                            <p className="text-sm text-muted-foreground">
                              Condensed overview of our impact and achievements
                            </p>
                          </div>
                          <DownloadButton
                            fileType="report"
                            fileName="annual-report-2023-summary"
                            variant="outline"
                            size="sm"
                          >
                            Download
                          </DownloadButton>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold">Financial Statements (PDF)</h4>
                            <p className="text-sm text-muted-foreground">Detailed financial information</p>
                          </div>
                          <DownloadButton
                            fileType="report"
                            fileName="financial-statements-2023"
                            variant="outline"
                            size="sm"
                          >
                            Download
                          </DownloadButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="2022">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                        <Image
                          src="/images/medical-camp-4.jpg"
                          alt="2022 Annual Report"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold mb-4">2022 Annual Report</h3>
                      <div className="space-y-4 text-muted-foreground mb-6">
                        <p>
                          2022 marked a year of growth and expansion for our foundation. We launched our women's
                          entrepreneurship program and expanded our healthcare initiatives to include mental health
                          services. Despite ongoing challenges from the pandemic, we adapted our programs to continue
                          serving communities safely and effectively.
                        </p>
                        <p>
                          This report provides a comprehensive overview of our work, impact metrics, financial
                          performance, and acknowledgments to our supporters.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b pb-3">
                          <div>
                            <h4 className="font-semibold">Full Annual Report (PDF)</h4>
                            <p className="text-sm text-muted-foreground">Complete report with financial statements</p>
                          </div>
                          <DownloadButton
                            fileType="report"
                            fileName="annual-report-2022-full"
                            variant="outline"
                            size="sm"
                          >
                            Download
                          </DownloadButton>
                        </div>
                        <div className="flex items-center justify-between border-b pb-3">
                          <div>
                            <h4 className="font-semibold">Impact Summary (PDF)</h4>
                            <p className="text-sm text-muted-foreground">
                              Condensed overview of our impact and achievements
                            </p>
                          </div>
                          <DownloadButton
                            fileType="report"
                            fileName="annual-report-2022-summary"
                            variant="outline"
                            size="sm"
                          >
                            Download
                          </DownloadButton>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold">Financial Statements (PDF)</h4>
                            <p className="text-sm text-muted-foreground">Detailed financial information</p>
                          </div>
                          <DownloadButton
                            fileType="report"
                            fileName="financial-statements-2022"
                            variant="outline"
                            size="sm"
                          >
                            Download
                          </DownloadButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="2021">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                        <Image
                          src="/images/school-improvement-1.jpg"
                          alt="2021 Annual Report"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold mb-4">2021 Annual Report</h3>
                      <div className="space-y-4 text-muted-foreground mb-6">
                        <p>
                          In 2021, our foundation focused on responding to the urgent needs created by the global
                          pandemic. We pivoted our programs to provide emergency support, including food assistance,
                          health education, and remote learning resources for students affected by school closures.
                        </p>
                        <p>
                          This report documents our emergency response efforts alongside our ongoing programs, financial
                          information, and recognition of the donors and partners who supported our work during this
                          challenging year.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b pb-3">
                          <div>
                            <h4 className="font-semibold">Full Annual Report (PDF)</h4>
                            <p className="text-sm text-muted-foreground">Complete report with financial statements</p>
                          </div>
                          <DownloadButton
                            fileType="report"
                            fileName="annual-report-2021-full"
                            variant="outline"
                            size="sm"
                          >
                            Download
                          </DownloadButton>
                        </div>
                        <div className="flex items-center justify-between border-b pb-3">
                          <div>
                            <h4 className="font-semibold">Impact Summary (PDF)</h4>
                            <p className="text-sm text-muted-foreground">
                              Condensed overview of our impact and achievements
                            </p>
                          </div>
                          <DownloadButton
                            fileType="report"
                            fileName="annual-report-2021-summary"
                            variant="outline"
                            size="sm"
                          >
                            Download
                          </DownloadButton>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold">Financial Statements (PDF)</h4>
                            <p className="text-sm text-muted-foreground">Detailed financial information</p>
                          </div>
                          <DownloadButton
                            fileType="report"
                            fileName="financial-statements-2021"
                            variant="outline"
                            size="sm"
                          >
                            Download
                          </DownloadButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Impact Reports */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Program Impact Reports</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Detailed reports on the outcomes and impact of our specific programs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/images/school-improvement-2.jpg"
                  alt="Education Program Impact"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">Education Program Impact</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Comprehensive analysis of our education initiatives, including school improvement projects,
                  scholarship programs, and teacher training.
                </p>
                <div className="mt-auto">
                  <DownloadButton
                    fileType="report"
                    fileName="education-impact-report-2024"
                    variant="outline"
                    className="w-full"
                  >
                    Download Report
                  </DownloadButton>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48">
                <Image src="/images/medical-camp-3.jpg" alt="Healthcare Program Impact" fill className="object-cover" />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">Healthcare Program Impact</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Detailed report on our healthcare initiatives, including mobile clinics, community health worker
                  training, and maternal health programs.
                </p>
                <div className="mt-auto">
                  <DownloadButton
                    fileType="report"
                    fileName="healthcare-impact-report-2024"
                    variant="outline"
                    className="w-full"
                  >
                    Download Report
                  </DownloadButton>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48">
                <Image src="/images/women-1.jpg" alt="Women Empowerment Impact" fill className="object-cover" />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">Women Empowerment Impact</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Analysis of our women's entrepreneurship and leadership programs, including outcomes, success stories,
                  and lessons learned.
                </p>
                <div className="mt-auto">
                  <DownloadButton
                    fileType="report"
                    fileName="women-empowerment-impact-report-2024"
                    variant="outline"
                    className="w-full"
                  >
                    Download Report
                  </DownloadButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image src="/images/workshop-1.jpg" alt="Governance" fill className="object-cover" />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Governance & Policies</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our foundation is governed by a dedicated board of directors who provide strategic guidance and
                  oversight. We maintain comprehensive policies and procedures to ensure ethical operations, legal
                  compliance, and effective risk management.
                </p>
                <p>
                  All of our governance documents are publicly available as part of our commitment to transparency.
                  These include our bylaws, conflict of interest policy, code of ethics, and whistleblower policy.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center justify-between border-b pb-3">
                    <div>
                      <h4 className="font-semibold">Bylaws</h4>
                      <p className="text-sm">Last updated: January 2023</p>
                    </div>
                    <DownloadButton fileType="policy" fileName="bylaws-2023" variant="outline" size="sm">
                      Download
                    </DownloadButton>
                  </div>

                  <div className="flex items-center justify-between border-b pb-3">
                    <div>
                      <h4 className="font-semibold">Conflict of Interest Policy</h4>
                      <p className="text-sm">Last updated: March 2023</p>
                    </div>
                    <DownloadButton
                      fileType="policy"
                      fileName="conflict-of-interest-policy-2023"
                      variant="outline"
                      size="sm"
                    >
                      Download
                    </DownloadButton>
                  </div>

                  <div className="flex items-center justify-between border-b pb-3">
                    <div>
                      <h4 className="font-semibold">Code of Ethics</h4>
                      <p className="text-sm">Last updated: February 2023</p>
                    </div>
                    <DownloadButton fileType="policy" fileName="code-of-ethics-2023" variant="outline" size="sm">
                      Download
                    </DownloadButton>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Whistleblower Policy</h4>
                      <p className="text-sm">Last updated: April 2023</p>
                    </div>
                    <DownloadButton fileType="policy" fileName="whistleblower-policy-2023" variant="outline" size="sm">
                      Download
                    </DownloadButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Our Finances or Governance?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            We're committed to transparency and are happy to provide additional information.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
