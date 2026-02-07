import React, { useState, useEffect } from 'react';
import {
    BookOpen,
    Users,
    Calendar,
    CheckCircle,
    Star,
    Menu,
    X,
    ChevronRight,
    Instagram,
    Facebook,
    Twitter,
    Linkedin,
    MapPin,
    Phone,
    Mail,
    Clock,
    LayoutDashboard,
    Plus,
    Trash2
} from 'lucide-react';

// --- Mock Data ---

const INITIAL_SUBJECTS = [
    { id: 1, title: 'Mathematics', level: 'K-12 & AP', icon: '📐', desc: 'Algebra, Geometry, Calculus, and Statistics.' },
    { id: 2, title: 'Science', level: 'All Levels', icon: '🧬', desc: 'Biology, Chemistry, Physics, and Earth Science.' },
    { id: 3, title: 'English & Writing', level: 'K-12', icon: '📝', desc: 'Essay writing, grammar, literature analysis, and ESL.' },
    { id: 4, title: 'Test Prep', level: 'SAT/ACT', icon: '🎯', desc: 'Intensive preparation strategies for standardized tests.' },
];

const INITIAL_TUTORS = [
    { id: 1, name: 'Sarah Jenkins', subject: 'Mathematics', exp: '5 Years', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
    { id: 2, name: 'David Chen', subject: 'Science', exp: '8 Years', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David' },
    { id: 3, name: 'Emily Carter', subject: 'English', exp: '4 Years', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily' },
    { id: 4, name: 'James Wilson', subject: 'Test Prep', exp: '10 Years', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James' },
];

const TESTIMONIALS = [
    { id: 1, text: "Apex Learning completely changed my son's attitude towards Math. He's now getting A's!", author: "Martha S., Parent" },
    { id: 2, text: "The SAT prep course was intense but worth it. My score went up by 200 points.", author: "Jason K., Student" },
];

// --- Components ---

const Navigation = ({ activeTab, setActiveTab, mobileMenuOpen, setMobileMenuOpen }) => (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
                <div
                    className="flex items-center cursor-pointer"
                    onClick={() => setActiveTab('home')}
                >
                    <div className="bg-blue-600 p-2 rounded-lg mr-2">
                        <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-bold text-2xl text-slate-800 tracking-tight">Apex<span className="text-blue-600">Learning</span></span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {['Home', 'Services', 'Tutors', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => setActiveTab(item.toLowerCase())}
                            className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeTab === item.toLowerCase() ? 'text-blue-600' : 'text-gray-500'}`}
                        >
                            {item}
                        </button>
                    ))}
                    <button
                        onClick={() => setActiveTab('booking')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Book a Session
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600 hover:text-blue-600">
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in-down">
                <div className="pt-2 pb-4 space-y-1 px-4">
                    {['Home', 'Services', 'Tutors', 'Contact', 'Booking'].map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                setActiveTab(item.toLowerCase());
                                setMobileMenuOpen(false);
                            }}
                            className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${activeTab === item.toLowerCase() ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        )}
    </nav>
);

const Hero = ({ onCtaClick }) => (
    <div className="relative bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-slate-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Unlock your full</span>{' '}
                            <span className="block text-blue-600 xl:inline">academic potential</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Expert tutoring in Math, Science, English, and Test Prep. We provide personalized learning plans to help students confidentially achieve their goals.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <button
                                    onClick={onCtaClick}
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg transition-all"
                                >
                                    Get Started
                                </button>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <button
                                    onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg transition-all"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-blue-100 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full object-cover bg-gradient-to-tr from-blue-200 to-indigo-100 flex items-center justify-center">
                {/* Abstract geometric representation instead of external img for reliability */}
                <div className="relative w-96 h-96">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/50 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                                <CheckCircle className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-800">Results Guaranteed</p>
                                <p className="text-sm text-slate-500">98% Success Rate</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                            <div className="h-2 bg-slate-200 rounded w-full"></div>
                            <div className="h-2 bg-slate-200 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Features = () => (
    <div id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Choose Apex</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                    A better way to learn
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                    We combine experienced educators with modern teaching methods to ensure every student succeeds.
                </p>
            </div>

            <div className="mt-16">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: 'Expert Tutors', desc: 'All our tutors are certified professionals with years of teaching experience.', icon: Users },
                        { title: 'Flexible Scheduling', desc: 'Book sessions that fit your busy lifestyle, 7 days a week.', icon: Calendar },
                        { title: 'Customized Plans', desc: 'Personalized learning paths tailored to each student\'s unique needs.', icon: BookOpen },
                    ].map((feature, idx) => (
                        <div key={idx} className="pt-6">
                            <div className="flow-root bg-slate-50 rounded-lg px-6 pb-8 h-full hover:shadow-md transition-shadow">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-slate-900 tracking-tight">{feature.title}</h3>
                                    <p className="mt-5 text-base text-gray-500">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const ServicesView = ({ subjects }) => (
    <div className="py-12 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Our Subjects</h2>
                <p className="mt-4 text-xl text-gray-500">Comprehensive tutoring across all major disciplines.</p>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
                {subjects.map((subject) => (
                    <div key={subject.id} className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 hover:border-blue-300 transition-colors">
                        <div className="flex-shrink-0">
                            <span className="text-4xl">{subject.icon}</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-slate-900">{subject.title}</h3>
                            <p className="text-sm text-blue-600 font-medium mb-2">{subject.level}</p>
                            <p className="text-gray-500">{subject.desc}</p>
                        </div>
                        <div>
                            <ChevronRight className="h-6 w-6 text-gray-300" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const TutorsView = ({ tutors }) => (
    <div className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Meet Our Educators</h2>
                <p className="mt-4 text-xl text-gray-500">Dedicated professionals committed to your success.</p>
            </div>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {tutors.map((tutor) => (
                    <div key={tutor.id} className="group relative bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 group-hover:opacity-75 h-64">
                            <img
                                src={tutor.image}
                                alt={tutor.name}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-slate-900">
                                {tutor.name}
                            </h3>
                            <p className="text-sm text-blue-600 mb-2">{tutor.subject} Expert</p>
                            <p className="text-sm text-gray-500">Experience: {tutor.exp}</p>
                            <div className="mt-4 flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                ))}
                                <span className="ml-2 text-xs text-gray-400">(45 reviews)</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const BookingForm = ({ subjects, tutors, onSubmitBooking }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        tutor: '',
        date: '',
        notes: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitBooking(formData);
    };

    return (
        <div className="py-12 bg-slate-50 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div>
                    <h2 className="mt-2 text-center text-3xl font-extrabold text-slate-900">
                        Book a Session
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Step {step} of 2
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {step === 1 ? (
                        <div className="space-y-4 animate-fade-in">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Select Subject</label>
                                <select
                                    name="subject"
                                    required
                                    className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
                                    value={formData.subject}
                                    onChange={handleChange}
                                >
                                    <option value="">Choose a subject...</option>
                                    {subjects.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Select Tutor (Optional)</label>
                                <select
                                    name="tutor"
                                    className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
                                    value={formData.tutor}
                                    onChange={handleChange}
                                >
                                    <option value="">Any Available Tutor</option>
                                    {tutors.map(t => <option key={t.id} value={t.name}>{t.name} - {t.subject}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    required
                                    className="mt-1 block w-full pl-3 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => setStep(2)}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            >
                                Next
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4 animate-fade-in">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="mt-1 block w-full pl-3 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="mt-1 block w-full pl-3 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Learning Goals / Notes</label>
                                <textarea
                                    name="notes"
                                    rows={3}
                                    className="mt-1 block w-full pl-3 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    placeholder="I want to focus on Algebra..."
                                />
                            </div>
                            <div className="flex space-x-3">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="flex-1 justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                                >
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                                >
                                    Confirm Booking
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

const ContactView = () => (
    <div className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900">Get in Touch</h2>
                <p className="mt-4 text-xl text-gray-500">Have questions? We're here to help.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Info Card */}
                <div className="bg-blue-600 rounded-2xl shadow-xl p-10 text-white">
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <p className="mb-8 text-blue-100">
                        Fill out the form or contact us directly. We usually respond within 24 hours.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <Phone className="h-6 w-6 text-blue-200" />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Mail className="h-6 w-6 text-blue-200" />
                            <span>support@apexlearning.com</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <MapPin className="h-6 w-6 text-blue-200" />
                            <span>123 Education Lane, Knowledge City, ST 12345</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Clock className="h-6 w-6 text-blue-200" />
                            <span>Mon-Fri: 9am - 7pm EST</span>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h4 className="font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <div className="bg-white/20 p-2 rounded-full hover:bg-white/30 cursor-pointer transition"><Facebook size={20} /></div>
                            <div className="bg-white/20 p-2 rounded-full hover:bg-white/30 cursor-pointer transition"><Twitter size={20} /></div>
                            <div className="bg-white/20 p-2 rounded-full hover:bg-white/30 cursor-pointer transition"><Instagram size={20} /></div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-slate-50 rounded-2xl p-10 shadow-sm border border-gray-100">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border" placeholder="Your name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border" placeholder="How can we help?"></textarea>
                        </div>
                        <button className="w-full bg-slate-900 text-white py-3 px-6 rounded-md hover:bg-slate-800 transition-colors font-medium">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

// --- Admin / CMS Simulation ---

const AdminDashboard = ({ bookings, tutors, setTutors, onLogout }) => {
    const [activeTab, setActiveTab] = useState('bookings');
    const [newTutor, setNewTutor] = useState({ name: '', subject: '', exp: '' });

    const handleAddTutor = (e) => {
        e.preventDefault();
        if (!newTutor.name) return;
        const tutor = {
            id: tutors.length + 1,
            ...newTutor,
            image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${newTutor.name}`
        };
        setTutors([...tutors, tutor]);
        setNewTutor({ name: '', subject: '', exp: '' });
    };

    const handleDeleteTutor = (id) => {
        setTutors(tutors.filter(t => t.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
                <div className="flex items-center space-x-3">
                    <LayoutDashboard className="h-6 w-6 text-blue-400" />
                    <h1 className="text-xl font-bold">Apex CMS Portal</h1>
                </div>
                <button onClick={onLogout} className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded transition">Logout</button>
            </div>

            <div className="flex h-full">
                {/* Sidebar */}
                <div className="w-64 bg-white min-h-[calc(100vh-64px)] shadow-r hidden md:block">
                    <div className="p-4 space-y-2">
                        <button
                            onClick={() => setActiveTab('bookings')}
                            className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 ${activeTab === 'bookings' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            <Calendar size={18} />
                            <span>Bookings</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('tutors')}
                            className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 ${activeTab === 'tutors' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            <Users size={18} />
                            <span>Manage Tutors</span>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8">
                    {activeTab === 'bookings' ? (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Bookings</h2>
                            {bookings.length === 0 ? (
                                <div className="bg-white p-8 rounded-lg shadow-sm text-center text-gray-500">
                                    No bookings yet. Check back later!
                                </div>
                            ) : (
                                <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {bookings.map((booking, idx) => (
                                                <tr key={idx}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium text-gray-900">{booking.name}</div>
                                                        <div className="text-sm text-gray-500">{booking.email}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.subject}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.date}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Confirmed</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Tutors</h2>

                            {/* Add Tutor Form */}
                            <div className="bg-white p-6 rounded-lg shadow-sm mb-8 border border-gray-200">
                                <h3 className="text-lg font-medium mb-4">Add New Tutor</h3>
                                <form onSubmit={handleAddTutor} className="flex gap-4 items-end">
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-gray-700">Name</label>
                                        <input
                                            type="text"
                                            value={newTutor.name}
                                            onChange={(e) => setNewTutor({ ...newTutor, name: e.target.value })}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                            placeholder="e.g. Dr. Alice Smith"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-gray-700">Subject</label>
                                        <input
                                            type="text"
                                            value={newTutor.subject}
                                            onChange={(e) => setNewTutor({ ...newTutor, subject: e.target.value })}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                            placeholder="e.g. Physics"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-gray-700">Experience</label>
                                        <input
                                            type="text"
                                            value={newTutor.exp}
                                            onChange={(e) => setNewTutor({ ...newTutor, exp: e.target.value })}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                            placeholder="e.g. 5 Years"
                                        />
                                    </div>
                                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
                                        <Plus size={20} className="mr-1" /> Add
                                    </button>
                                </form>
                            </div>

                            {/* Tutor List */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {tutors.map((tutor) => (
                                    <div key={tutor.id} className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <img src={tutor.image} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">{tutor.name}</div>
                                                <div className="text-sm text-gray-500">{tutor.subject}</div>
                                            </div>
                                        </div>
                                        <button onClick={() => handleDeleteTutor(tutor.id)} className="text-red-500 hover:text-red-700">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Footer = ({ onAdminClick }) => (
    <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-1">
                    <span className="font-bold text-2xl tracking-tight">Apex<span className="text-blue-500">Learning</span></span>
                    <p className="mt-4 text-gray-400 text-sm">
                        Empowering students to reach their academic goals through personalized tutoring and mentorship.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                        <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                        <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                        <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                    </div>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
                    <ul className="mt-4 space-y-4">
                        <li><a href="#" className="text-base text-gray-300 hover:text-white">Mathematics</a></li>
                        <li><a href="#" className="text-base text-gray-300 hover:text-white">Science</a></li>
                        <li><a href="#" className="text-base text-gray-300 hover:text-white">Languages</a></li>
                        <li><a href="#" className="text-base text-gray-300 hover:text-white">Test Prep</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                    <ul className="mt-4 space-y-4">
                        <li><a href="#" className="text-base text-gray-300 hover:text-white">About Us</a></li>
                        <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
                        <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms of Service</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Office</h3>
                    <ul className="mt-4 space-y-4">
                        <li className="flex items-start">
                            <MapPin className="h-5 w-5 text-gray-500 mr-2 shrink-0" />
                            <span className="text-base text-gray-300">123 Education Lane<br />Knowledge City, ST 12345</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-800 pt-8 flex justify-between items-center">
                <p className="text-base text-gray-400">&copy; 2026 Apex Learning Inc. All rights reserved.</p>
                <button onClick={onAdminClick} className="text-xs text-gray-700 hover:text-gray-500">Admin Portal</button>
            </div>
        </div>
    </footer>
);

const SuccessModal = ({ onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
        <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-bounce-in">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-500 mb-6">
                We've sent a confirmation email to your inbox. A tutor will be in touch shortly.
            </p>
            <button
                onClick={onClose}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
                Back to Home
            </button>
        </div>
    </div>
);

// --- Main App Component ---

export default function App() {
    const [activeTab, setActiveTab] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [bookings, setBookings] = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);
    const [tutors, setTutors] = useState(INITIAL_TUTORS);

    // CMS Mode toggle
    const [isAdmin, setIsAdmin] = useState(false);

    const handleBooking = (data) => {
        setBookings([...bookings, data]);
        setShowSuccess(true);
    };

    const closeSuccess = () => {
        setShowSuccess(false);
        setActiveTab('home');
    };

    if (isAdmin) {
        return (
            <AdminDashboard
                bookings={bookings}
                tutors={tutors}
                setTutors={setTutors}
                onLogout={() => setIsAdmin(false)}
            />
        );
    }

    return (
        <div className="font-sans text-slate-800 min-h-screen flex flex-col">
            <Navigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            <main className="flex-grow">
                {activeTab === 'home' && (
                    <div className="animate-fade-in">
                        <Hero onCtaClick={() => setActiveTab('booking')} />
                        <Features />
                        <div className="bg-blue-50 py-16">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                                <h2 className="text-3xl font-extrabold text-slate-900 mb-8">What Parents Say</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {TESTIMONIALS.map(t => (
                                        <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm relative">
                                            <div className="absolute top-4 left-4 text-6xl text-blue-100 font-serif">"</div>
                                            <p className="relative z-10 text-lg text-gray-600 italic mb-4">{t.text}</p>
                                            <p className="font-bold text-slate-900">{t.author}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'services' && <ServicesView subjects={INITIAL_SUBJECTS} />}
                {activeTab === 'tutors' && <TutorsView tutors={tutors} />}
                {activeTab === 'booking' && (
                    <BookingForm
                        subjects={INITIAL_SUBJECTS}
                        tutors={tutors}
                        onSubmitBooking={handleBooking}
                    />
                )}
                {activeTab === 'contact' && <ContactView />}
            </main>

            <Footer onAdminClick={() => setIsAdmin(true)} />

            {showSuccess && <SuccessModal onClose={closeSuccess} />}

            {/* Global styles for animations not in Tailwind default */}
            <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
        .animate-fade-in-down {
            animation: fade-in 0.2s ease-out forwards;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
    );
}