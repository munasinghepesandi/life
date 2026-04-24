import './App.css'

const navItems = [
	{ label: 'About', href: '#about' },
	{ label: 'Programs', href: '#programs' },
	{ label: 'Impact', href: '#impact' },
	{ label: 'Contact', href: '#contact' },
]

const programs = [
	{
		title: 'Leadership for Tomorrow',
		text: 'A future-focused curriculum that builds strategic thinking, ethical leadership, and social responsibility.',
	},
	{
		title: 'Digital Learning Studio',
		text: 'Interactive labs and project-based learning experiences designed to bridge academics with real-world technology.',
	},
	{
		title: 'Global Exchange Pathways',
		text: 'Cross-cultural learning opportunities that connect students and educators with global institutions and mentors.',
	},
]

const impactStats = [
	{ value: '120+', label: 'Partner Schools' },
	{ value: '35K+', label: 'Learners Reached' },
	{ value: '18', label: 'Future Skills Tracks' },
]

const Home =() => {
	return (
		<div className="life-site">
			<header className="hero" id="top">
				<nav className="navbar">
					<a className="brand" href="#top" aria-label="LIFE Home">
						<span className="brand-mark">LIFE</span>
						<span className="brand-name">Liberal Institute for Future Education</span>
					</a>

					<ul className="nav-links">
						{navItems.map((item) => (
							<li key={item.label}>
								<a href={item.href}>{item.label}</a>
							</li>
						))}
					</ul>

					<a href="#contact" className="nav-cta">
						Enroll Now
					</a>
				</nav>

				<div className="hero-content">
					<div className="hero-copy">
						<p className="eyebrow">LIFE: Liberal Institute for Future Education</p>
						<h1>Building Future-Ready Minds Through Liberal, Human-Centered Education.</h1>
						<p>
							We shape curious thinkers, empathetic leaders, and innovative problem-solvers through a learning ecosystem built for the next generation.
						</p>
						<div className="hero-actions">
							<a href="#programs" className="btn btn-primary">
								Explore Programs
							</a>
							<a href="#about" className="btn btn-secondary">
								Learn About LIFE
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

			<main>
				<section className="section about" id="about">
					<div className="section-heading">
						<p className="eyebrow">Who We Are</p>
						<h2>Education That Balances Knowledge, Character, and Innovation.</h2>
					</div>
					<p>
						LIFE is dedicated to redefining education with a forward-looking liberal framework. Our approach combines academic excellence with creativity, critical inquiry, and strong values to prepare learners for an evolving world.
					</p>
				</section>

				<section className="section programs" id="programs">
					<div className="section-heading">
						<p className="eyebrow">Signature Programs</p>
						<h2>Designed Around Real-World Challenges and Future Opportunities.</h2>
					</div>

					<div className="program-grid">
						{programs.map((program) => (
							<article key={program.title} className="program-card">
								<h3>{program.title}</h3>
								<p>{program.text}</p>
							</article>
						))}
					</div>
				</section>

				<section className="section impact" id="impact">
					<div className="section-heading">
						<p className="eyebrow">Our Impact</p>
						<h2>Growing a Network of Progress-Driven Learning Communities.</h2>
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
						<h2>Partner With Us to Shape the Future of Education.</h2>
					</div>
					<p>
						Reach out for admissions, institutional partnerships, or custom education initiatives tailored to your community.
					</p>
					<a className="btn btn-primary" href="mailto:info@lifeeducation.org">
						Contact Us
					</a>
				</section>

				<footer className="footer">
					<div className="footer-brand">
						<p className="eyebrow">LIFE</p>
						<h3>Liberal Institute for Future Education</h3>
						<p>
							A modern education brand focused on character, creativity, and future-ready learning.
						</p>
					</div>

					<div className="footer-links">
						<h4>Quick Links</h4>
						<a href="#about">About</a>
						<a href="#programs">Programs</a>
						<a href="#impact">Impact</a>
						<a href="#contact">Contact</a>
					</div>

					<div className="footer-contact">
						<h4>Contact</h4>
						<a href="mailto:info@lifeeducation.org">info@lifeeducation.org</a>
						<a href="tel:+10000000000">+1 (000) 000-0000</a>
					</div>
				</footer>
			</main>
		</div>
	)
}

export default Home
