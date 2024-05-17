export default function Answer() {
	return (
		<>
			<h1 className="text-2xl font-bold mb-6">5. Imagine a customer writes in requesting help with a build issue on a framework or technology that you&apos;ve not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?</h1>

			<p className="mb-2">I would start by asking the customer to describe the issue in detail, including any error messages or logs they are seeing to help in understanding the exact nature of the problem.</p>

			<p className="mb-2">Next, I would gather as much information as possible about the framework or technology they are using. This could include things like the version of the framework/technology, any dependencies they might be using, etc.</p>

			<p className="mb-2">I could read through any available documentation and literature available for the framework or technology they are using. There could be a common issues section that mentions what the customer is seeing.</p>

			<p className="mb-2">If at all possible, I could try and reproduce the issue on my end.</p>

			<p className="mb-6">Lastly, I would reach out to a colleague who might be more knowledgeable about this framework or technology and has maybe seen this issue in the past.</p>

			<p className="mb-6">Here is an example response I could write to the customer:</p>


			<p className="mb-2">&quot;Hi Customer,</p>
			
			<p className="mb-2">Thanks for reaching out about the build issue with the Framework/Technology. To help you swiftly, we need some details: the exact error messages or logs you are encountering, the version of the Framework/Technology you are using, your project&apos;s dependency list, whether the issue is on your local machine or during Vercel deployment, and any recent changes to your project. If you could also provide a link to a repository or steps to reproduce the issue, that would be very helpful. We&apos;ll look into this and get back to you as soon as possible.</p>
  						
			<p className="mb-2">Kind regards,</p>
			<p className="mb-2">Tal&quot;</p>
		</>
	)
}