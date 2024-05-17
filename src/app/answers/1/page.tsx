export default function Answer() {
	return (
    <div>
        <h1 className="text-2xl font-bold mb-6">1. From this <a href="https://gist.github.com/Pieparker/b04a4e9ff82ba949e5db9d5b0e9d89e8">list</a>, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each. </h1>
        <h2 className="text-xl font-semibold mb-4">Favorite Tasks</h2>
        <ol className="list-decimal ml-6 mb-6">
            <li className="mb-2">Work with the product team to develop a new feature based on feedback from customers: </li>
			<ul className="list-disc ml-6 mb-2">
            	<li>Throughout previous roles I&apos;ve always found joy in optimizing and improving product or workflow for my team and for customers. I find joy in sitting with customers and discussing their day to day workflow and seeing how I could improve it for them.</li>
        	</ul>
            <li className="mb-2">Create video tutorials to help teach users a specific feature or use case</li>
			<ul className="list-disc ml-6 mb-2">
            	<li>If a picture is worth a thousand words, then a video is worth a million. I believe that other than physically being next a user and guiding them a video would be the next best thing.</li>
        	</ul>
            <li className="mb-2">Manage a support team</li>
			<ul className="list-disc ml-6 mb-2">
            	<li>Having come from previous manageroul roles and team lead positions, I have always gravitated towards leadership positions when available and find joy in leading by example.</li>
        	</ul>
            <li className="mb-2">Help train and onboard new support teammates</li>
			<ul className="list-disc ml-6 mb-2">
            	<li>I find the best way to truly learn something is to teach other people. Especially if you have only recently learned it. You are able to share insights into your process and little nausaunces that helped you along the way. When you are already an expert at it, you can sometimes forget things that seem obvious to you, but might not be to someone only starting out.</li>
        	</ul>
            <li className="mb-2">Write and maintain support articles and docs pages</li>
			<ul className="list-disc ml-6 mb-2">
            	<li>Having worked at small startup organisations I have truly learned the value of good documentation. It becomes an invalable tool to explain to new and exsisting staff how to perform essential procedures and is invalable for training and allows for individual knowledge to be shared with the team.</li>
        	</ul>
        </ol>

        <h2 className="text-xl font-semibold mb-4">Least Favorite Tasks</h2>
        <ol className="list-decimal ml-6 mb-6">
            <li className="mb-2">Respond to 25+ support requests via email every day</li>
			<ul className="list-disc ml-6 mb-2">
            	<li>While of course understandable and is a factor of most support roles, I tend to prefer fewer longer tickets that require more thought rather than quick easy tickets.</li>
        	</ul>
            <li className="mb-2">Analyze hundreds of support tickets to spot trends the product team can use</li>
			<ul className="list-disc ml-6 mb-2">
            	<li>This can be time consuming and may take away from other work. Although I do believe this work is important a lot of the time simply working the tickets as normal many trends can be spotted and reported to the product team. </li>
        	</ul>
            <li className="mb-2">Find and recruit teammates for the support team</li>
			<ul className="list-disc ml-6 mb-2">
            	<li>Finding the right person can be very time consuming and often comes at a cost of other work obligations suffering.</li>
        	</ul>
            <li className="mb-2">Dig through logs to troubleshoot a customer&apos;s broken project</li>
			<ul className="list-disc ml-6 mb-2">
            	<li>While obviosuly this is an essnetial tool to diagnosing a customers problem it can occasionally be a little confusing and especially when you are not familair with the customer&apos;s workflow.</li>
        	</ul>
            <li className="mb-2">Help resolve billing issues for customers</li>
			<ul className="list-disc ml-6 mb-2">
            	<li>This can be a tense subject for customers sometime and they may feel more stressed discussing this.</li>
        	</ul>
        </ol>
    </div>
	)
}