import React from 'react'

const MainTerms = () => {
  return (
    <div className='w-[70vw] m-auto my-10'>
      <h3><b>Effective Date:</b> 30/06/2025</h3>
      <h3><b>Company Name:</b> Park Ave Electrical</h3>
      <h3><b>Location:</b> New York, USA</h3>

      <p className='py-5'>Effective as of 1st July 2025 and last updated on 1st July 2025, these Terms of Service ("Terms") govern your engagement with Park Ave Electrical ("Company," "we," "us," or "our"), a licensed electrical services provider operating from New York, NY, USA. By accessing our website or utilizing our services, you expressly agree to be bound by these legally binding terms.
      </p>
      <p className='pb-5'>Welcome to Park Ave Electrical! These Terms of Service (“Terms”) govern your use of our website and our electrical services. By accessing our site or booking our services, you agree to these Terms.</p>
      <ol className='text-2xl font-bold list-decimal ml-5'>
        <li className='mb-10'>
          <h1>Acceptance of Terms</h1>
          <div className='content text-base font-normal'>

            <p>By accessing our website at https://park-ave-app.vercel.app/ or engaging our electrical services, you agree to be bound by these Terms of Service. If you do not accept these terms, immediately discontinue use of our services.</p>
          </div>
        </li>
        <li className='mb-10'>Services Overview
          <div className='content text-base font-normal'>
            <p>We provide licensed electrical services to residential and commercial clients throughout New York, including:</p>
            <ul className='list-disc ml-5'>
              <li>Electrical installations, repairs, and maintenance</li>
              <li>Emergency service response</li>
              <li>Electrical system inspections and upgrades</li>
              <li>Service scope and pricing are subject to change without notice. All work complies with NYC Electrical Code and NEC standards.</li>
            </ul>
          </div>
        </li>
        <li className='mb-10'>Website Use Conditions
          <div className='content text-base font-normal'>
            <p>You agree to:</p>
            <ul className='list-disc ml-5'>
              <li>Use this site solely for legitimate service inquiries</li>
              <li>Refrain from reverse engineering, scraping, or disrupting site functionality</li>
              <li>Respect intellectual property rights (all content © Park Ave Electrical 2025)</li>
              <li>Unauthorized commercial use of site content is expressly prohibited.</li>
            </ul>
          </div>
        </li>
        <li className='mb-10'>
          <h3>Quotes & Pricing Structure</h3>
          <div className='content text-base font-normal'>
            <ul className='list-disc ml-5'>
              <li>Estimates: Preliminary quotes are non-binding and valid for 30 days</li>
              <li>
                <p>Final Pricing: Determined after physical inspection and may vary due to:</p>
                <ol className='list-decimal ml-5'>
                  <li>Unforeseen wiring/structural conditions</li>
                  <li>Code compliance requirements</li>
                  <li>Material cost fluctuations</li>
                </ol>
              </li>
              <li>Change Orders: Material scope changes require written authorization</li>
            </ul>
          </div>
        </li>
        <li className='mb-10'>
          <h3>Appointment Policy</h3>
          <div className='content text-base font-normal'>
            <ul className='list-disc ml-5'>
              <li>Scheduling: Available via <span className='text-blue-500'><a href="https://park-ave-app.vercel.app/" target='_blank'>https://park-ave-app.vercel.app/</a></span>, <span className='text-gray-500'>+1 (212) 832-3109  info@parkaveelectrical.com</span> during business hours (M-F 8AM-6PM ET)</li>
              <li>Cancellations: Require 24-hour notice to avoid fee</li>
              <li>No-Shows: Subject to full diagnostic charge</li>
            </ul>
          </div>
        </li>
        <li className='mb-10'>Payment Terms
          <div className='content text-base font-normal'>
            <ul className='list-disc ml-5'>
              <li>Due Date: Payment due upon service completion unless net-30 terms are pre-approved in writing</li>
              <li>Late Payments: Subject to 1.5% monthly finance charge (18% APR) and collection costs</li>
              <li>Retainage: 10% holdback permitted only for written warranty claims</li>
            </ul>
          </div>
        </li>
        <li className='mb-10'>
          <h3>Warranties & Limitations</h3>
          <div className='content text-base font-normal'>
            <ul className='list-disc ml-5'>
              <li>Workmanship Warranty: 1-year guarantee on installed components (excludes manufacturer defects)</li>
              <li>Liability Cap: Our maximum liability shall not exceed the service fee paid</li>
              <li>
                <p>Exclusions: We are not liable for:</p>
                <ol className='list-decimal ml-5'>
                  <li>Pre-existing electrical conditions</li>
                  <li>Acts of God or third-party damages</li>
                  <li>Consequential/property damages beyond our direct control</li>
                </ol>
              </li>
            </ul>
          </div>
        </li>
        <li className='mb-10'>
          <h3>Third-Party Resources</h3>
          <p className='content text-base font-normal'>Links to supplier websites or product manuals are provided for convenience only. We do not endorse or control third-party content.</p>
        </li>
        <li className='mb-10'>
          <h3>Governing Law & Disputes</h3>
          <p className='content text-base font-normal'>These Terms are governed by New York State law. Any disputes shall be resolved through binding arbitration in Manhattan County per AAA Commercial Rules.</p>
        </li>
        <li className='mb-10'>
          <h3>Policy Updates</h3>
          <p className='content text-base font-normal'>We reserve the right to modify these Terms. Continued use after [30] days of posting revised Terms constitutes acceptance. Material changes will be communicated via email.</p>
        </li>

        <li className='mb-10'>
          <h3>Contact Us</h3>
          <div className='content text-base font-normal'>
            <p>For questions, requests, or concerns about this policy or your data:</p>
            <p><b>Park Ave Electrical</b></p>
            <p><b>2 Park Ave 29th Fl, New York, NY 10016</b></p>
            <p><b>(info@parkaveelectrical.com)</b></p>
            <p><b>+1 (212) 832-3109</b></p>
          </div>
        </li>
      </ol>

    </div>
  )
}

export default MainTerms
