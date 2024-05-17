export default function Answer() {
	return (
		<>
			<h1 className="text-3xl font-bold mb-6"> 3. Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?</h1>
				<p className="mb-2">When I worked for a company called TEEG in Australia, I often worked weekend shifts alone. On one particular weekend, the company launched a special &quot;double dollar&quot; promotion, requiring manual adjustments in every point of sale (POS) system across all venues to be performed by the venue staff. This entailed the staff tweaking system files to modify on-screen elements and functionalities, enabling customers to double their deposited money.</p>

				<p className="mb-2">On the day of the promotion, I was flooded with an extremely large volume of tickets and phone calls. It turned out the promotion was not correctly set up on the POS systems, likely due to inadequate instructions provided to the venue staff.</p>

				<p className="mb-2">Realizing that remotely accessing each POS system and manually configuring the promotion would be excessively time-consuming in such a time-sensitive situation, I instead created a script that could be dispatched to each POS system, automating all the necessary steps for setting up the promotion correctly.</p>

				<p className="mb-2">After testing the script on a single computer and confirming with venue staff that the promotion was configured properly, I quickly deployed the script on all the POS systems in the remaining 50-100 venues. The issue was resolved in around an hour rather than the several hours that it would have taken manually.</p>

				<p className="mb-2">The following Monday, I explained my solution to management. As a result, my script was integrated into every current and future POS system, along with instructions that I wrote on how to activate and deactivate the promotion.</p>
		</>
	)
}