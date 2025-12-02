export default {
	name: 'team',
	title: 'Team',
	type: 'document',
	fieldsets: [
		{
			name: 'metadata',
			title: 'SEO & metadata',
		},
	],
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			name: 'hero',
			title: 'Hero',
			type: 'hero',
		},
		{
			name: 'team',
			title: 'GIX Team',
			type: 'array',
			of: [{ type: 'teamMember' }],
		},
		{
			name: 'board',
			title: 'Advisors and Board of Directors',
			type: 'array',
			of: [{ type: 'teamMember' }],
		},
		{
			name: 'description',
			type: 'text',
			title: 'Description',
			description: 'This description populates meta-tags on the webpage',
			fieldset: 'metadata',
		},
		{
			name: 'openGraphImage',
			type: 'image',
			title: 'Open Graph Image',
			description: 'Image for sharing previews on Facebook, Twitter etc.',
			fieldset: 'metadata',
		},
	],

	preview: {
		select: {
			title: 'title',
			media: 'openGraphImage',
		},
	},
};

// [
//   {
//     "_key": "9a788e40c3719ae09b1581a91b6b37a1",
//     "_type": "teamGroup",
//     "members": [
//       {
//         "_key": "af3fba551988",
//         "_type": "teamMember",
//         "bio": "Dan is the former head of regulatory policy at the NYSE and has extensive experience in interacting with FINRA, the SEC, and other regulatory bodies. He also is an attorney who previously worked at several international law firms.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-ed1fc9f5f6fd24b20b6b61c172ce59b782b4672f-1280x853-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/daniel-labovitz/",
//         "name": "Daniel Labovitz",
//         "role": "Chief Executive Officer, Co-Founder"
//       },
//       {
//         "_key": "c6b954bbedd5",
//         "_type": "teamMember",
//         "bio": "Charlie is the former CEO of Kellogg Capital Markets and a former Executive Floor Governor at the NYSE. He sat as a Trustee on the New Jersey investment council and was a member of its ESG investment committee.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-693053c78eddf03ed52f7c79b88fc1f30514be34-2400x1600-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/charles-p-dolan-12a25434/",
//         "name": "Charles Dolan",
//         "role": "President, Co-Founder"
//       },
//       {
//         "_key": "f85cd701e6d4",
//         "_type": "teamMember",
//         "bio": "Shelley is an investment advisor and strategist in environmental sustainability and commodities focusing on impact investing. She has worked as a Market Strategist for Brevan Howard and Director for Roubini Global Economics. Shelley has also worked as an independent sustainability consultant and partner to multiple RIAs, family offices, and hedge funds.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-5d5ed9b5b3e3689b5d1426bfec9bb8afe0c90d7c-2400x1600-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/shelleyrg3/",
//         "name": "Shelley Goldberg",
//         "role": "Chief Green Officer"
//       },
//       {
//         "_key": "2a624f03c25e",
//         "_type": "teamMember",
//         "bio": "Jim has more than 30 years of experience in securities regulation, audit, and compliance. Jim worked at NYSE for 25 years in a number of senior roles in regulation, including Head of Compliance for the NYSE’s US exchanges. He was also the Chief Regulatory Officer for the National Stock Exchange. He is an attorney admitted to practice in New York.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-606a865d95a528ba527c2012620ece19204b5063-2400x1600-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/james-g-buckley-8b150337/",
//         "name": "Jim Buckley",
//         "role": "Chief Regulatory Officer"
//       },
//       {
//         "_key": "28032cc6b097",
//         "_type": "teamMember",
//         "bio": "Paul brings more than 25 years of experience in technology, operations, and regulatory leadership within the exchange industry to GIX. Most recently, he served as Chief Risk Officer at IEX Group, overseeing information security, enterprise risk, and vendor management. During his time at IEX, Paul held multiple senior leadership roles, including Head of Market Operations, Head of Listings and Issuer Services, and Advisor to IEX Digital Assets. Prior to IEX, he was Senior Vice President of Market Operations for the New York Stock Exchange’s cash equities business, where he led key technology and market structure initiatives and managed the daily operations of the NYSE trading floor.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-56591e0f6f493924619c3f2be74db087f1dea506-2400x1600-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/paulbauccio/",
//         "name": "Paul Bauccio",
//         "role": "Chief Operating Officer"
//       },
//       {
//         "_key": "3feefc0cb793",
//         "_type": "teamMember",
//         "bio": "Alex is a former Global Learning Consultant at State Street Bank. He brings 20+\n years of experience in various roles within State Street including hedge fund and private equity trade operations, project management, business strategy, and learning & development. He has his Masters in Information & Knowledge Strategy from Columbia University. ",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-1abe431d9f70b87b3dd878052af21ab8bfaa50b8-2400x1600-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/alexander-kontoleon/",
//         "name": "Alexander Kontoleon",
//         "role": "Head of Operations Strategy & Research"
//       },
//       {
//         "_key": "e5ccd7d19abe",
//         "_type": "teamMember",
//         "bio": "Steve brings over 30 years of leadership in equity trading operations, regulatory oversight, and operational risk management. He has held executive roles at Instinet, Fidelity Capital Markets, and State Street Global Markets, where he oversaw global trading operations across the U.S., Europe, Canada, and Latin America. Steve's experience spans the delivery of complex technology solutions, project and program management, compliance protocols, and operational risk frameworks. ",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-57892cc921081dc20f57b9c079e8879ac3599f45-2400x1600-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/stephenbosze/",
//         "name": "Steve Bosze",
//         "role": "Compliance and Technology Integration"
//       },
//       {
//         "_key": "a19b8f49cd63",
//         "_type": "teamMember",
//         "bio": "Former Managing Director of Global Affairs & Government Relations at NYSE; Served 8 years as executive branch appointee in White House and US Department of State.\n",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-a2fe3734ee2624c1a228676c037792deea056102-2400x1600-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/christian-vanderbrouk-9bb0641/",
//         "name": "Christian Vanderbrouk",
//         "role": "Public Affairs & Government Engagement"
//       },
//       {
//         "_key": "b869bc47d8b7",
//         "_type": "teamMember",
//         "bio": "Scott is a business development and sales professional with deep experience in working with C-suite executives, delivering revenue growth, marketing initiatives, product development, and providing key strategic account sales to a diverse range of companies.  Scott has been a sales executive at the GLG Institute, the Chief Executive Group, and National Review. ",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-1e2bde39c86121dd3e7fc3ea5d0ae4bb3593f2c6-2400x1600-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/scottbuddprofile/",
//         "name": "Scott Budd",
//         "role": "Head of Listing Sales"
//       },
//       {
//         "_key": "160935ff8eee",
//         "_type": "teamMember",
//         "bio": "Tim spent over 30 years at the NYSE, starting as a SIAC tech and going on to become a NYSE seat owner working for Sanford Bernstein and LaBranche Financial Services. He would go on to grow one of the largest independent floor operations, Prime Executions Inc. Tim served as a senior Floor Official, a director of the Floor Members Emergency fund and as a member of the NYSE Hearing Board. ",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-35c9c254c356aadf5e273290b1bbf9ed7e8c3424-2400x1600-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/timothy-cochrane977/",
//         "name": "Timothy Cochrane",
//         "role": "Head of Issuer Relations"
//       },
//       {
//         "_key": "aa1502e40ce1",
//         "_type": "teamMember",
//         "bio": "Marc is the former Senior Advisor, APAC - Global Listings at the NYSE and was Chief Representative, NYSE Beijing Representative Office. He was previously the Regional Head for the NYSE's Asia Pacific listings.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-51306a4e3f50f650398fdc4ac1927a570888bd57-2400x1600-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/marc-iyeki-b6176511/",
//         "name": "Marc Iyeki",
//         "role": "Listing Sales Advisor"
//       },
//       {
//         "_key": "525425cbe3f5",
//         "_type": "teamMember",
//         "bio": "Pete Jenkins has been a leading institutional and market structure expert for many years as the head of Deutsche Asset Management’s Global Trading Desk and, later, as head of NYSE’s Institutional Client Group also serving as a member of the Operating Committee. ",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-c07e7e2bc8c722caffbe36c5a675bea9c9693dd6-2400x1600-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/peter-jenkins-3706b47/",
//         "name": "Peter Jenkins",
//         "role": " Institutional Equity Sales & Strategy"
//       },
//       {
//         "_key": "faec6b723d58",
//         "_type": "teamMember",
//         "bio": "Jim Ross has spent 30+ years pioneering new electronic auction venues for both Exchange and ATS markets. Jim ran Instinet’s Global Crossing business for many years and later oversaw NYSE’s intraday and post-close electronic call auction facilities. ",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-661a59ce8d0d155fb2ee3b8d200fc4b0a9866a19-2400x1600-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/rosscross/",
//         "name": "Jim Ross",
//         "role": " Institutional Equity Sales & Strategy"
//       },
//       {
//         "_key": "c518936e65fb",
//         "_type": "teamMember",
//         "bio": "Michael is a 40-year veteran of Wall Street and a founding member of Posit. He has built a straight-through processing model and has experience building and leading brokerage firms.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-6e709893d896cbda8b80f557c33817846c357cbf-2400x1600-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/mickeyrosen/",
//         "name": "Michael Rosen",
//         "role": "Chief of Staff"
//       },
//       {
//         "_key": "1e7e40adf496",
//         "_type": "teamMember",
//         "bio": "Pat has 40 years of broker-dealer operations experience and has led operations teams at several Wall Street brokerage firms. He specializes in back-office and straight-through processing.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-0b865231b6412bb2a79f4a4f396cb2b78cb0f70e-2400x1600-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/patrick-craven-42aba91/",
//         "name": "Patrick Craven",
//         "role": "Director of Operations & IT"
//       },
//       {
//         "_key": "6e0cebf2a890",
//         "_type": "teamMember",
//         "bio": "Lou is the former Executive Vice President of Operations at the NYSE and 31-year veteran of the exchange. He sat on the boards of DTCC and the National Stock Exchange, and he chaired the NSX Regulatory Oversight Committee. ",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-43f692147b8ad789f61460cc2bbfe183126650f7-640x640-jpg",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/loupastina",
//         "name": "Louis Pastina",
//         "role": "Market Structure Senior Advisor"
//       }
//     ],
//     "showLinkedInIcons": true,
//     "title": "GIX Team"
//   },
//   {
//     "_key": "33973a9ed1032948c7ea6383a70c14b2",
//     "_type": "teamGroup",
//     "members": [
//       {
//         "_key": "a702e04d47bf",
//         "_type": "teamMember",
//         "bio": "Rob is the former CEO of Prime Executions, Inc., a NYSE and FINRA-registered broker dealer focused on trade executions and equity capital markets. He is the former President of TOMI Environmental Solutions, Inc. and a former Managing Director and Regional Head of Equities for the NYSE.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-9fa3c6c2c206b8f5cea237aa4eeb30fd54f0699d-560x556-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/robertwotczak/",
//         "name": "Robert Wotczak",
//         "role": "Board Member - Green Exchange PBC"
//       },
//       {
//         "_key": "f18c05bada67",
//         "_type": "teamMember",
//         "bio": "John serves as the Office Managing Partner of Polsinelli's Philadelphia office as a trusted advisor to public and private companies, private equity firms and management teams on all aspects of executive compensation, corporate governance and employee benefits. John has years of experience of management and board members on evolving shareholder and stakeholder expectations for ESG compliance, including proxy advisory services (including ISS and MSCI), ESG criteria, institutional shareholder standards, and various uniform disclosure standards, including Task Force on Climate-Related Financial Disclosures (TFCD) and Sustainability Accounting Standards Board voluntary disclosures (SASB)",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-cf360d6b700e42c8f58fbacf6b689a719dea1171-800x800-jpg",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/john-martini-8a49852/",
//         "name": "John Martini",
//         "role": "Board Member - Green Exchange PBC"
//       },
//       {
//         "_key": "23f0882a1ece",
//         "_type": "teamMember",
//         "bio": "Maria Mähl is a sustainability leader with over 15 years of experience delivering cutting edge technology solutions at the intersection of sustainable finance, corporate sustainability and carbon markets. She currently serves as a Partner at ESG Book, a leading provider of climate and sustainability data and technology, where she has held senior business and product development roles. Previously, she was a Partner at the ESG quantitative asset manager Arabesque. Maria’s work is grounded in a background that bridges fintech, startups and supply chain management, informed by early experience with circular economy and artificial intelligence through roles at Volvo Group, Capgemini, the Clinton Global Initiative, the United Nations, the International Institute for Environment and Development (IIED), and blockchain company Demia.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-cbf4335ec8ec8963576d67450d49c8c185ef3a94-2400x1600-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/maria-mahl-9a56b23/",
//         "name": "Maria Mahl",
//         "role": "Board Member - GIX LLC"
//       },
//       {
//         "_key": "07b97d31ca16",
//         "_type": "teamMember",
//         "bio": "James Andrus has held several prominent leadership roles, including Vice President of Public Policy and Vice President of Sustainability for Global Markets at Franklin Templeton, as well as interim Managing Investment Director for Board Governance and Sustainability at CalPERS. He currently chairs the Investor as Purchaser Subcommittee of the Securities and Exchange Commission’s Investor Advisory Committee and serves on the Investor Advisory Group of the Public Company Accounting Oversight Board. His extensive advisory experience includes appointments to the IFRS Advisory Council and the Financial Accounting Standards Advisory Council. A graduate of the United States Military Academy at West Point and the University of Texas School of Law, Andrus’s career exemplifies a deep commitment to public service, investor protection, policy development, and collaborative leadership across sectors.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-2c7c535028b2b4bf8794837c8fb7f8f3cc783aea-2400x1600-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/andrusjames/",
//         "name": "James Andrus",
//         "role": "Board Member - GIX LLC"
//       },
//       {
//         "_key": "83ff2b81f777",
//         "_type": "teamMember",
//         "bio": "Oscar N. Onyema, OON is a capital markets executive who led the transformation of the Nigerian Stock Exchange into a world-class multi-asset platform and took NGX Group public. With over 15 years of board leadership, he has chaired key market infrastructure institutions and driven landmark initiatives across African and global exchanges. He brings deep expertise in governance, exchange operations, and strategic capital formation to the GIX Board, where he also serves as Chairman of the Board Regulatory Oversight Committee.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-90a30377e8aedd257c7266addc809fbc02f814ea-2400x1600-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/oonyema/",
//         "name": "Oscar Onyema",
//         "role": "Board Director - GIX LLC"
//       },
//       {
//         "_key": "bcf91330892e",
//         "_type": "teamMember",
//         "bio": "Bill Bender is a seasoned board member, tech industry executive, former USAF CIO, and retired three-star general with extensive expertise in IT, cybersecurity, and governance. As CIO, he oversaw a $17B IT spend and a 54,000-person workforce. At Leidos, he leadership of Government Relations & Customer Account Management supported growth from $10B to $15B. An innovation driver, Bender is also an experienced board member, advisor to startups, and a published writer and speaker. Previously, as CIO of the USAF, he spearheaded IT modernization and cybersecurity, establishing the first roles for CISO, CDO, and Chief Innovation Officer within the Department of Defense. He also envisioned a first of its kind initiative to leverage the Silicon Valley entrepreneurial and innovation ecosystem, establishing the Air Force Innovation Unit, which led to today's Defense Innovation Unit with the Office of the Secretary of Defense. He also developed key initiatives like Agile Software Factory and USAF’s Cloud First strategy.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-5f2dfb39e7e4600576f7bdcb7cc8f6f19b8a0636-2400x1600-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/bill-bender0101/",
//         "name": "Bill Bender",
//         "role": "Board Member - GIX LLC"
//       },
//       {
//         "_key": "b0207c3f7956",
//         "_type": "teamMember",
//         "bio": "Kirk Kellogg is the Founder and Chief Executive Officer of Kellogg Group LLC, owner of Kellogg Specialist Group and Kellogg Capital Markets, former New York Stock Exchange an American Stock Exchange member firms respectively. Prior to founding Kellogg Group, LLC, Kirk was a Director of National Discount Brokers. Kirk is also a Board member of IAT Insurance Group.  Additionally, Kirk serves as Trustee of St. Lawrence University and the Ritt Kellogg Fund, a Colorado College Program.  He is also a board member of Berkshire School and the U. S. Ski & Snowboard Foundation.  Kirk is the former President of The Bond Club of New York and a former board member of the NJ chapter of the Young Presidents Organization. Kellogg holds an MBA from the College of William and Mary and currently resides in Palm Beach FL.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-6066599d2ae0140768570333fafc0823e7a0ea44-551x552-png",
//             "_type": "reference"
//           }
//         },
//         "name": "Kirk Kellogg",
//         "role": "Board Member - GIX LLC"
//       },
//       {
//         "_key": "c0b9707ae0f1",
//         "_type": "teamMember",
//         "bio": "Bob is the founder and Managing Partner at Wexford Capital Partners, LLC, and a board member at Entelligent, Inc. He is a former Managing Director at BMO Capital Markets.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-3e5481b95ece8e54388f38fec0836bd6fff30073-536x548-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/robertfbarnett/",
//         "name": "Robert Barnett",
//         "role": "Advisory Board Member"
//       },
//       {
//         "_key": "d801a74e73c7",
//         "_type": "teamMember",
//         "bio": "James is the Former Head of Equity Trading at Merrill Lynch and Bear Stearns. He is currently a Professor of Finance & ESG at Fordham University and serves on the Covenant House Corporate Board.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-91fb97d75d10af28ae126c13c8fa16203db8c1f0-500x500-webp",
//             "_type": "reference"
//           }
//         },
//         "name": "James Manfredonia",
//         "role": "Advisory Board Member"
//       },
//       {
//         "_key": "6edfa0d3c7a3",
//         "_type": "teamMember",
//         "bio": "Judy is a Senior Director at the Women Corporate Directors Foundation. She is the former Associate Director of the Governance Center at the Conference Board and a former Vice President (ESG and Investor Communications) with the NYSE Global Corporate Client Group.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-f1af2ddf1e40d32fdb24b7c6cc7049d2321ec645-560x556-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/judymclevey/",
//         "name": "Judy McLevey",
//         "role": "Advisory Board Member"
//       },
//       {
//         "_key": "3caa3120194f",
//         "_type": "teamMember",
//         "bio": "Nishitani-san is the former CEO of the US operation at ORIX Corporation (NYSE ‘IX’) and the former board member of Houlihan Lokey Inc (NYSE ‘HLI’). He currently serves as a Human Capital Committee member of the International Corporate Governance Network (ICGN) in London, in addition to the board position of the two Tokyo-based companies.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-b0f350f9f825b63a8fa1854d618eb291d1ac2da4-508x504-jpg",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/hideto-nishitani-nacd-dc-82526281/",
//         "name": "Hideto Nishitani",
//         "role": "Advisory Board Member"
//       },
//       {
//         "_key": "5119964db118",
//         "_type": "teamMember",
//         "bio": "Shiva is the Kester and Byrnes Professor of Accounting and Auditing at the Columbia Business School. He is the former Vice Dean of Research at Columbia and formerly taught at the Fuqua School of Business at Duke University. He is a contributing columnist at Forbes.com.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-ab4ea70bb152e9e6b5d34e194da5b48e56a29fbc-558x564-png",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/shiva-rajgopal-86aa11136/",
//         "name": "Shiva Rajgopal",
//         "role": "Advisory Board Member"
//       },
//       {
//         "_key": "4b80c015e01a",
//         "_type": "teamMember",
//         "bio": "Brian is a founder of Reverse LLC and had a 43-year career in Investment Management, which included roles at Bear Stearns, Scudder Stevens and Clark, the TCW Group, and Chautauqua Capital which he also founded. Brian serves as the Board Chair of Climate Emergency Advocate (CEA). He holds a BS in Public Affairs and an MBA from the University of Southern California.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-9ceacf08f651d115dd2f962480280e9f8cf34fe3-600x600-jpg",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/brian-beitner-366082269/",
//         "name": "Brian Beitner",
//         "role": "Advisory Board Member"
//       },
//       {
//         "_key": "4a8baaf72a6e",
//         "_type": "teamMember",
//         "bio": "Dave is the President, Chair of the Board for Urvin Finance. He previously served on the Aequitas NEO Exchange board as an Independent Director. Dave has also been an Independent Member on the Market Regulation Committee for FINRA, and worked as a Technology Architecture Consultant for IEX.",
//         "image": {
//           "_type": "image",
//           "asset": {
//             "_ref": "image-a0ca87fef3f782a9159e54308e90a53773adf43c-337x337-jpg",
//             "_type": "reference"
//           }
//         },
//         "linkedIn": "https://www.linkedin.com/in/davelauer1/",
//         "name": "Dave Lauer",
//         "role": "Advisory Board Member"
//       }
//     ],
//     "showLinkedInIcons": false,
//     "title": "Advisors and Board of Directors"
//   }
// ]
