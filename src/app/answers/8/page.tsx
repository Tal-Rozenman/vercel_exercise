export default function Answer() {
	return (
		<>
			<h1 className="text-2xl font-bold mb-6">8. A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Feel free to add any information about your decision making process after the reply. 
			</h1>

			<p className="mb-2">Dear Customer,</p>

			<p className="mb-2">Thank you for reaching out.</p>
			
			<p className="mb-2">To ensure that your site is not indexed by search engines, you can use the <strong>noindex</strong> directive. You can place a <code>robots.txt</code> file in the root directory of your project with the following content to prevent all search engines from accessing your site:</p>

			<pre className="mb-2"><code>User-agent: *
			<pre className="mb-2">Disallow: /</pre>
			</code></pre>

			<p className="mb-2">This will tell most web crawlers not to index any pages on your site. For more detailed instructions and best practices, you can refer to the <u><a href="https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt">Google developer documentation</a></u> on creating and submitting a robots.txt file.</p>

			<p className="mb-2">Additionally, to block the indexing of individual pages, you can include a <strong>noindex</strong> meta tag in the HTML of each page you want to block. Here&apos;s how you can add it to the <code>&lt;head&gt;</code> section of your pages:</p>

			<pre className="mb-2"><code>&lt;meta name=&quot;robots&quot; content=&quot;noindex&quot;&gt;</code></pre>

			<p className="mb-2">For a comprehensive guide on how to implement the <strong>noindex</strong> directive, please refer to the <u><a href="https://developers.google.com/search/docs/crawling-indexing/block-indexing">Google developer documentation</a></u> on blocking search indexing with noindex. This documentation provides detailed instructions on how to use the <strong>noindex</strong> rule set with either a <code>&lt;meta&gt;</code> tag or HTTP response header to prevent content from being indexed by search engines like Google.</p>

			<p className="mb-2">Remember, for the <strong>noindex</strong> directive to be effective, the page must not be blocked by the <code>robots.txt</code> file and must be otherwise accessible to the crawler.</p>

			<p className="mb-2">Please let us know if you need any further assistance.</p>

			<p className="mb-2">Kind regards,</p>
			<p className="mb-2">Tal</p>
		</>
	)
}