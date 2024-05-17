export default function Answer() {
	return (
		<>
			<h1 className="text-3xl font-bold mb-6">4. When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?</h1>

  			<h2 className="text-2xl font-semibold mb-4">Edge Functions</h2>
  			<p className="mb-2"><strong>Pros:</strong> They are generally faster and more cost-effective than traditional serverless functions. Deployed globally by default, they run in the region closest to the request for the lowest latency possible. Ideal for tasks like data fetching or rewrites after the cache.</p>
  			<p className="mb-2"><strong>Cons:</strong> They operate within a leaner runtime, which may not support all the capabilities of a full serverless environment.</p>
  			<p className="mb-2"><strong>Use Case:</strong> Good for simple content manipulation tasks like image compression or code stripping.</p>

  			<h2 className="text-2xl font-semibold mb-4 mt-6">Serverless Functions</h2>
  			<p className="mb-2"><strong>Pros:</strong> More flexible and can handle a wider range of tasks. They run within a MicroVM, which can support more complex computing needs.</p>
  			<p className="mb-2"><strong>Cons:</strong> They might be slower and more expensive compared to Edge Functions due to the overhead of the MicroVM.</p>
  			<p className="mb-2"><strong>Use Case:</strong> Suitable for complex backend logic that requires access to a full runtime environment.</p>

  			<h2 className="text-2xl font-semibold mb-4 mt-6">Edge Middleware</h2>
  			<p className="mb-2"><strong>Pros:</strong> Runs before the cache and can modify incoming requests before they hit your page or API routes.</p>
  			<p className="mb-2"><strong>Cons:</strong> Limited to altering requests and cannot send responses directly.</p>
  			<p className="mb-2"><strong>Use Case:</strong> Useful for authentication, custom redirects, or rewriting URLs on the fly.</p>
		</>
	)
}