export default function Answer() {
	return (
    <div>
        <h1 className="text-2xl font-bold mb-6">1. From this <a href="https://gist.github.com/Pieparker/b04a4e9ff82ba949e5db9d5b0e9d89e8">list</a>, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each. </h1>
        <h2 className="text-xl font-semibold mb-4">Favorite Tasks</h2>
        <ol className="list-decimal ml-6 mb-6">
            <li className="mb-2"><strong>Work with the product team to develop a new feature based on feedback from customers:</strong> Throughout previous roles, I&apos;ve always found joy in optimizing and improving the product or workflow for my team and customers. I enjoy sitting with customers, discussing their day-to-day workflow, and seeing how I could improve it for them.</li>
            <li className="mb-2"><strong>Create video tutorials to help teach users a specific feature or use case:</strong> If a picture is worth a thousand words, then a video is worth a million. I believe that, other than physically being next to a user and guiding them, a video would be the next best thing.</li>
            <li className="mb-2"><strong>Manage a support team:</strong> Having come from previous managerial roles and team lead positions, I have always gravitated towards leadership positions when available and find joy in leading by example.</li>
            <li className="mb-2"><strong>Help train and onboard new support teammates:</strong> I find the best way to truly learn something is to teach it to other people, especially if you have only recently learned it yourself. You are able to share insights into your process and little nuances that helped you along the way. When you are already an expert at it, you can sometimes forget things that seem obvious to you but might not be to someone just starting out.</li>
            <li className="mb-2"><strong>Write and maintain support articles and docs pages:</strong> Having worked at small startup organizations, I have truly learned the value of good documentation. It becomes an invaluable tool to explain to new and existing staff how to perform essential procedures and is invaluable for training, allowing for individual knowledge to be shared with the team.</li>
        </ol>

        <h2 className="text-xl font-semibold mb-4">Least Favorite Tasks</h2>
        <ol className="list-decimal ml-6 mb-6">
            <li className="mb-2"><strong>Respond to 25+ support requests via email every day:</strong> While, of course, understandable and a factor of most support roles, I tend to prefer fewer, longer tickets that require more thought rather than quick, easy tickets.</li>
            <li className="mb-2"><strong>Analyze hundreds of support tickets to spot trends the product team can use:</strong> This can be time-consuming and may take away from other work. Although I do believe this work is important, a lot of the time simply working the tickets as normal, many trends can be spotted and reported to the product team.</li>
            <li className="mb-2"><strong>Find and recruit teammates for the support team:</strong> Finding the right person can be very time-consuming and often comes at the cost of other work obligations suffering.</li>
            <li className="mb-2"><strong>Dig through logs to troubleshoot a customer&apos;s broken project:</strong> While obviously this is an essential tool for diagnosing a customer&apos;s problem, it can occasionally be a little confusing, especially when you are not familiar with the customer&apos;s workflow.</li>
            <li className="mb-2"><strong>Help resolve billing issues for customers:</strong> This can be a tense subject for customers sometimes, and they may feel more stressed discussing it.</li>
        </ol>
    </div>
	)
}