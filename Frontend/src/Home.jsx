import { useState } from 'react'
import './App.css'

const navItems = [
	{ label: 'About', href: '#about' },
	{ label: 'Programs', href: '#programs' },
	{ label: 'Admissions', href: '#journey' },
	{ label: 'Gallery', href: '#gallery' },
	{ label: 'Impact', href: '#impact' },
	{ label: 'Contact', href: '#contact' },
]

const programs = [
	{
		title: 'Leadership for Tomorrow',
		text: 'A future-focused curriculum that builds strategic thinking, ethical leadership, and social responsibility.',
		image:
			'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
	},
	{
		title: 'Digital Learning Studio',
		text: 'Interactive labs and project-based learning experiences designed to bridge academics with real-world technology.',
		image:
			'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80',
	},
	{
		title: 'Global Exchange Pathways',
		text: 'Cross-cultural learning opportunities that connect students and educators with global institutions and mentors.',
		image:
			'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
	},
]

const impactStats = [
	{ value: '120+', label: 'Partner Schools' },
	{ value: '35K+', label: 'Learners Reached' },
	{ value: '18', label: 'Future Skills Tracks' },
]

const trustHighlights = [
	'NAEYC-Aligned Learning Framework',
	'ISO-Informed Academic Operations',
	'Global University Partner Network',
	'Safeguarding and Wellbeing Certified',
]

const aboutPillars = ['Outcome-Driven Curriculum', 'Student Wellbeing First', 'Global Skills Development']

const aboutFacts = [
	{ label: 'Student Support', value: '1:1' },
	{ label: 'Curriculum Focus', value: 'Holistic' },
	{ label: 'Learning Culture', value: 'Global' },
]

const journeySteps = [
	{
		title: 'Book a Consultation',
		text: 'Speak with our advisors to align programs with learner goals and preferred pathways.',
	},
	{
		title: 'Personalized Planning',
		text: 'Receive a curated learning roadmap with clear milestones, assessments, and support touchpoints.',
	},
	{
		title: 'Begin with Confidence',
		text: 'Start with structured onboarding, mentor guidance, and progress reviews from day one.',
	},
]

const galleryMoments = [
	{
		title: 'Creative Studios',
		image:
			'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
	},
	{
		title: 'Team Learning',
		image:
			'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
	},
	{
		title: 'Future Labs',
		image:
			'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
	},
	{
		title: 'Global Perspectives',
		image:
			'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
	},
]

const Home =() => {
	const currentYear = new Date().getFullYear()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const handleNavItemClick = () => {
		setIsMobileMenuOpen(false)
	}

	return (
		<div className="life-site">
			<header className="hero" id="top">
				<nav className="navbar">
					<a className="brand" href="#top" aria-label="LIFE Home">
						<span className="brand-mark">LIFE</span>
						<span className="brand-name">Liberal Institute for Future Education</span>
					</a>

					<button
						type="button"
						className="menu-toggle"
						onClick={() => setIsMobileMenuOpen((prev) => !prev)}
						aria-label="Toggle navigation menu"
						aria-expanded={isMobileMenuOpen}
						aria-controls="mobile-nav-links"
					>
						<span />
						<span />
						<span />
					</button>

					<ul id="mobile-nav-links" className={`nav-links ${isMobileMenuOpen ? 'nav-open' : ''}`}>
						{navItems.map((item) => (
							<li key={item.label}>
								<a href={item.href} onClick={handleNavItemClick}>
									{item.label}
								</a>
							</li>
						))}
					</ul>

					<a href="#contact" className="nav-cta">
						Request Prospectus
					</a>
				</nav>

				<div className="hero-content">
					<div className="hero-copy">
						<p className="eyebrow">LIFE: Liberal Institute for Future Education</p>
						<h1>Professional Education Pathways for Future-Ready Learners.</h1>
						<h2>
							LIFE combines academic rigor, strong values, and practical innovation to help learners build the capabilities demanded by a changing world.
						</h2>
						<div className="hero-actions">
							<a href="#programs" className="btn btn-primary">
								Explore Programs
							</a>
							<a href="#contact" className="btn btn-secondary">
								Schedule a Consultation
							</a>
						</div>
					</div>

					<div className="hero-image-wrap">
						<img
							src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
							alt="Students in a collaborative learning environment"
						/>
					</div>
				</div>
			</header>

			<section className="trust-strip" aria-label="Institutional trust highlights">
				{trustHighlights.map((item) => (
					<p key={item}>{item}</p>
				))}
			</section>

			<main>
				<section className="section about" id="about">
					<div className="section-heading">
						<p className="eyebrow">Who We Are</p>
						<h2>Education Designed for Academic Excellence and Lifelong Leadership.</h2>
					</div>
					<div className="about-layout">
						<div className="about-copy">
							<p>
								LIFE is an institution focused on measurable learning outcomes, student wellbeing, and globally relevant competencies. We deliver structured pathways that help learners progress with confidence.
							</p>
							<div className="about-quote">
								<span className="about-quote-mark">“</span>
								<p>
									Our aim is to create a learning experience that is disciplined, caring, and highly adaptable.
								</p>
							</div>
							<ul className="about-pillar-list" aria-label="Who we are highlights">
								{aboutPillars.map((pillar) => (
									<li key={pillar}>{pillar}</li>
								))}
							</ul>
							<div className="about-facts" aria-label="Who we are key facts">
								{aboutFacts.map((fact) => (
									<div key={fact.label} className="about-fact-card">
										<strong>{fact.value}</strong>
										<span>{fact.label}</span>
									</div>
								))}
							</div>
						</div>
						<div className="about-image-wrap">
							<img
								src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
								alt="Students and mentors collaborating in a modern classroom"
							/>
						</div>
					</div>
				</section>

				<section className="section programs" id="programs">
					<div className="section-heading">
						<p className="eyebrow">Signature Programs</p>
						<h2>Structured Programs Aligned with Real-World and Academic Standards.</h2>
					</div>

					<div className="program-grid">
						{programs.map((program) => (
							<article key={program.title} className="program-card">
								<img src={program.image} alt={program.title} />
								<h3>{program.title}</h3>
								<p>{program.text}</p>
							</article>
						))}
					</div>
				</section>

				<section className="section journey" id="journey">
					<div className="section-heading">
						<p className="eyebrow">Admissions Journey</p>
						<h2>A Clear, Guided Process for Families and Institutional Partners.</h2>
					</div>
					<div className="journey-grid">
						{journeySteps.map((step, index) => (
							<article key={step.title} className="journey-card">
								<span className="journey-step">Step {index + 1}</span>
								<h3>{step.title}</h3>
								<p>{step.text}</p>
							</article>
						))}
					</div>
				</section>

				<section className="section gallery" id="gallery">
					<div className="section-heading">
						<p className="eyebrow">Learning Environments</p>
						<h2>Modern Spaces That Support Collaboration, Focus, and Creativity.</h2>
					</div>
					<p>
						Our facilities are purpose-built to promote inquiry, teamwork, and high-quality learning experiences across every stage.
					</p>
					<div className="gallery-grid">
						{galleryMoments.map((item) => (
							<article key={item.title} className="gallery-card">
								<img src={item.image} alt={item.title} />
								<h3>{item.title}</h3>
							</article>
						))}
					</div>
				</section>

				<section className="section impact" id="impact">
					<div className="section-heading">
						<p className="eyebrow">Our Impact</p>
						<h2>Delivering Consistent Outcomes Across Schools and Communities.</h2>
					</div>

					<div className="impact-strip">
						{impactStats.map((stat) => (
							<div key={stat.label} className="impact-item">
								<p>{stat.value}</p>
								<span>{stat.label}</span>
							</div>
						))}
					</div>
				</section>

				<section className="section contact" id="contact">
					<div className="section-heading">
						<p className="eyebrow">Connect With LIFE</p>
						<h2>Speak With Our Team About Admissions and Institutional Partnerships.</h2>
					</div>
					<p>
						Contact us for admissions, strategic partnerships, or program implementation support tailored to your context.
					</p>
					<a className="btn btn-primary" href="mailto:info@lifeeducation.org">
						Email Admissions
					</a>
				</section>

				<footer className="footer">
					<div className="footer-brand">
						<p className="eyebrow">LIFE</p>
						<h3>Liberal Institute for Future Education</h3>
						<p>
							An institution committed to high standards, responsible leadership, and future-ready education.
						</p>
					</div>

					<div className="footer-links">
						<h4>Quick Links</h4>
						<a href="#about">About</a>
						<a href="#programs">Programs</a>
						<a href="#journey">Admissions</a>
						<a href="#gallery">Gallery</a>
						<a href="#impact">Impact</a>
						<a href="#contact">Contact</a>
					</div>

					<div className="footer-contact">
						<h4>Contact</h4>
						<a href="mailto:info@lifeeducation.org">info@lifeeducation.org</a>
						<a href="tel:+10000000000">+1 (000) 000-0000</a>
					</div>

					<p className="footer-copyright">
						&copy; {currentYear} P&M Technologies. All rights reserved.
					</p>
				</footer>
			</main>
		</div>
	)
}

export default Home
