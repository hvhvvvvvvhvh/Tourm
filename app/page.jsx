'use client';

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot, faClock, faChevronDown, faMagnifyingGlass, faUser,
  faArrowRight, faPlay, faCalendarDays, faUsers, faPlane, faXmark, faChevronLeft, faChevronRight, faRoute, faUserTie, faStar, faExpand, faFacebookF, faTwitter, faInstagram, faLinkedinIn, faQuoteLeft, faPhone, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const baseCategories = [
  { title: 'Cruises', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=88' },
  { title: 'Hiking', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=88' },
  { title: 'Airbirds', image: 'https://images.unsplash.com/photo-1756639516241-decdb3f084b6?auto=format&fit=crop&fm=jpg&q=88&w=1200' },
  { title: 'Wildlife', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=88' },
  { title: 'Walking', image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=88' },
  { title: 'Wildlife', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=88' },
  { title: 'City Tours', image: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=900&q=88' },
  { title: 'Camping', image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=900&q=88' },
  { title: 'Walking', image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=88' },
];

const categories = [...baseCategories, ...baseCategories, ...baseCategories];
const categoryCount = baseCategories.length;
const categoryStart = categoryCount;

const destinations = [
  { name: 'Maldives', listing: 15, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=88' },
  { name: 'Mauritius', listing: 12, image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=88' },
  { name: 'Maldives', listing: 15, image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=88' },
  { name: 'Bora Bora', listing: 18, image: 'https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=900&q=88' },
  { name: 'Phuket', listing: 21, image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=88' },
  { name: 'Santorini', listing: 17, image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=88' },
];


const popularTours = [
  { name: 'Greece Tour Package', rating: '4.8', price: '$980.00', duration: '7 Days', image: 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=1000&q=88' },
  { name: 'Italy Tour Package', rating: '4.8', price: '$990.00', duration: '7 Days', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=88' },
  { name: 'Dubai Tour Package', rating: '4.8', price: '$980.00', duration: '7 Days', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=88' },
  { name: 'Bali Tour Package', rating: '4.9', price: '$920.00', duration: '6 Days', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=88' },
  { name: 'Swiss Alps Tour Package', rating: '4.9', price: '$1,240.00', duration: '8 Days', image: 'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?auto=format&fit=crop&w=1000&q=88' },
  { name: 'Maldives Tour Package', rating: '4.8', price: '$1,180.00', duration: '7 Days', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=88' },
];

const galleryImages = [
  { alt: 'Beach escape', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=88' },
  { alt: 'Mountain lake boat', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=88' },
  { alt: 'Mountain valley', image: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=900&q=88' },
  { alt: 'Snow adventure', image: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=900&q=88' },
  { alt: 'Friends city tour', image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=88' },
  { alt: 'Tropical island', image: 'https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=900&q=88' },
  { alt: 'Cruise ship', image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=900&q=88' },
];

const tourGuides = [
  { name: 'Jacob Jones', role: 'Tourist Guide', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=420&q=90' },
  { name: 'Jane Cooper', role: 'Tourist Guide', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=420&q=90' },
  { name: 'Guy Hawkins', role: 'Tourist Guide', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=420&q=90' },
  { name: 'Jenny Wilson', role: 'Tourist Guide', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=420&q=90' },
  { name: 'Robert Fox', role: 'Tourist Guide', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=420&q=90' },
  { name: 'Esther Howard', role: 'Tourist Guide', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=420&q=90' },
  { name: 'Cody Fisher', role: 'Tourist Guide', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=420&q=90' },
  { name: 'Brooklyn Simmons', role: 'Tourist Guide', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=420&q=90' },
];


const testimonials = [
  { name: 'Marie Carter', role: 'Traveller', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=90', quote: 'Booking with Wanderly was the best decision I made this year. They managed everything—from flights to accommodations—flawlessly, allowing me to fully enjoy my trip.' },
  { name: 'Brad Bennett', role: 'Traveller', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=90', quote: 'Wanderly goes above and beyond to ensure their clients feel valued. I returned home with incredible memories and cannot wait to plan my next adventure.' },
  { name: 'Jane Simon', role: 'Traveller', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=90', quote: 'Their team truly understands travelers’ needs. Wanderly crafted a personalized itinerary that perfectly balanced adventure, relaxation, and cultural immersion.' },
  { name: 'Maria Doe', role: 'Traveller', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=90', quote: 'A home that perfectly blends sustainability with luxury until I discovered Ecoland Residence. From the moment I stepped into this community, I knew it was where I wanted to live. The commitment to eco-friendly living.' },
  { name: 'Sophia Martinez', role: 'Traveller', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=90', quote: 'I have traveled with many agencies before, but Wanderly stands out for exceptional customer service and attention to detail. Every moment felt special.' },
  { name: 'Peter Max', role: 'Traveller', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=90', quote: 'Thanks to Wanderly, I explored breathtaking destinations I never would have discovered on my own. The local guides were knowledgeable and made every tour engaging.' },
];


const brandLogos = [
  { name: 'Travel brand', image: '/reference/brands/partial.jpg', partial: true },
  { name: 'Wanderlust', image: '/reference/brands/wanderlust.jpg' },
  { name: 'Mountain', image: '/reference/brands/mountain.jpg' },
  { name: 'BlueLake', image: '/reference/brands/blulake.jpg' },
  { name: 'Adventure', image: '/reference/brands/adventure.jpg' },
  { name: 'Mountain', image: '/reference/brands/mountain.jpg' },
  { name: 'Adventure', image: '/reference/brands/adventure.jpg' },
  { name: 'Wanderlust', image: '/reference/brands/wanderlust.jpg' },
];

const instagramPosts = [
  { alt: 'Eiffel Tower travel', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=320&q=88' },
  { alt: 'Tropical beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=320&q=88' },
  { alt: 'Tropical island travel', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=320&q=88' },
  { alt: 'Friends at the beach', image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=320&q=88' },
  { alt: 'Resort aerial view', image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=320&q=88' },
  { alt: 'Dubai skyline', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=320&q=88' },
];

const newsArticles = [
  { date: 'July 05 2024', read: '6 Min Read', title: '10 Reasons why you should visit New Jersey', image: '/reference/news/new-jersey.jpg' },
  { date: 'July 06 2024', read: '7 Min Read', title: 'The best time to visit Japan & enjoy the cherry blossoms', image: '/reference/news/japan.jpg' },
  { date: 'July 07 2024', read: '8 Min Read', title: 'The 7 amazing destinations for adventure seekers', image: '/reference/news/adventure-destinations.jpg' },
  { date: 'July 08 2024', read: '6 Min Read', title: 'How to plan an unforgettable mountain adventure', image: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=90' },
  { date: 'July 09 2024', read: '7 Min Read', title: 'The most beautiful places to explore this summer', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=90' },
  { date: 'July 10 2024', read: '5 Min Read', title: 'Travel tips for your next great escape', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=90' },
];

const slides = [
  { image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=2200&q=88', eyebrow: 'Get unforgettable pleasure with us', title: <>Natural Wonder<br />of the world</>, copy: 'From hidden beaches to breathtaking mountains, discover experiences that turn every trip into a story worth telling.' },
  { image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=88', eyebrow: 'Explore beyond the ordinary', title: <>Explore beauty of<br />the whole world</>, copy: 'Discover remarkable landscapes, vibrant destinations and unforgettable moments with journeys designed around you.' },
  { image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2200&q=88', eyebrow: 'Your next adventure awaits', title: <>Travel more.<br />Live more.</>, copy: 'Explore remarkable landscapes, vibrant cities and unforgettable moments with a trip designed for you.' },
];

function nextIndex(current, length, delta) {
  return (current + delta + length) % length;
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [form, setForm] = useState({ destination: '', date: '', travelers: '2 Adults', type: 'All Experiences' });
  const [message, setMessage] = useState('');
  const [categorySlide, setCategorySlide] = useState(categoryStart);
  const [categoryDrag, setCategoryDrag] = useState(0);
  const [heroDrag, setHeroDrag] = useState(0);
  const [categoryJustDragged, setCategoryJustDragged] = useState(false);
  const [destinationSlide, setDestinationSlide] = useState(2);
  const [destinationDrag, setDestinationDrag] = useState(0);
  const [destinationStep, setDestinationStep] = useState(392);
  const destinationPointer = useRef(null);
  const [destinationMessage, setDestinationMessage] = useState('');
  const [aboutVisible, setAboutVisible] = useState(false);
  const [aboutMessage, setAboutMessage] = useState('');
  const [tourSlide, setTourSlide] = useState(0);
  const [tourVisible, setTourVisible] = useState(3);
  const [tourDrag, setTourDrag] = useState(0);
  const [tourMessage, setTourMessage] = useState('');
  const [galleryLightbox, setGalleryLightbox] = useState(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [guideSlide, setGuideSlide] = useState(4);
  const [guideDrag, setGuideDrag] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(3);
  const [testimonialDrag, setTestimonialDrag] = useState(0);
  const [testimonialStep, setTestimonialStep] = useState(746);
  const testimonialPointer = useRef(null);
  const [brandIndex, setBrandIndex] = useState(0);
  const [brandDrag, setBrandDrag] = useState(0);
  const [newsSlide, setNewsSlide] = useState(0);
  const [newsDrag, setNewsDrag] = useState(0);
  const [newsStep, setNewsStep] = useState(367);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const newsPointer = useRef(null);
  const brandPointer = useRef(null);
  const guidePointer = useRef(null);
  const tourPointer = useRef(null);
  const aboutSectionRef = useRef(null);
  const categoryPointer = useRef(null);
  const heroPointer = useRef(null);
  const statsSectionRef = useRef(null);

  useEffect(() => {
    const timer = window.setInterval(() => setCategorySlide((current) => current + 1), 5200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateDestinationStep = () => setDestinationStep(window.innerWidth <= 560 ? 260 : window.innerWidth <= 900 ? 300 : 392);
    updateDestinationStep();
    window.addEventListener('resize', updateDestinationStep);
    return () => window.removeEventListener('resize', updateDestinationStep);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setDestinationSlide((current) => nextIndex(current, destinations.length, 1)), 5000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!destinationMessage) return undefined;
    const timer = window.setTimeout(() => setDestinationMessage(''), 1800);
    return () => window.clearTimeout(timer);
  }, [destinationMessage]);

  useEffect(() => {
    const node = aboutSectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setAboutVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAboutVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.18 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!aboutMessage) return undefined;
    const timer = window.setTimeout(() => setAboutMessage(''), 1800);
    return () => window.clearTimeout(timer);
  }, [aboutMessage]);

  useEffect(() => {
    const updateTourVisible = () => setTourVisible(window.innerWidth <= 700 ? 1 : window.innerWidth <= 980 ? 2 : 3);
    updateTourVisible();
    window.addEventListener('resize', updateTourVisible);
    return () => window.removeEventListener('resize', updateTourVisible);
  }, []);

  useEffect(() => {
    const max = Math.max(0, popularTours.length - tourVisible);
    if (tourSlide > max) setTourSlide(max);
  }, [tourVisible, tourSlide]);

  useEffect(() => {
    const max = Math.max(0, popularTours.length - tourVisible);
    const timer = window.setInterval(() => setTourSlide((current) => current >= max ? 0 : current + 1), 4700);
    return () => window.clearInterval(timer);
  }, [tourVisible]);

  useEffect(() => {
    if (!tourMessage) return undefined;
    const timer = window.setTimeout(() => setTourMessage(''), 1800);
    return () => window.clearTimeout(timer);
  }, [tourMessage]);

  useEffect(() => {
    const updateTestimonialStep = () => {
      if (window.innerWidth <= 700) setTestimonialStep(window.innerWidth - 22);
      else if (window.innerWidth <= 1100) setTestimonialStep(626);
      else setTestimonialStep(746);
    };
    updateTestimonialStep();
    window.addEventListener('resize', updateTestimonialStep);
    return () => window.removeEventListener('resize', updateTestimonialStep);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setTestimonialSlide((current) => (current + 1) % testimonials.length), 5200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setBrandIndex((current) => (current + 1) % brandLogos.length), 3600);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateNewsStep = () => {
      const width = window.innerWidth;
      if (width <= 700) setNewsStep(Math.max(260, width - 40));
      else if (width <= 1100) setNewsStep((Math.min(width - 40, 1080) - 16) / 2 + 16);
      else setNewsStep(367);
    };
    updateNewsStep();
    window.addEventListener('resize', updateNewsStep);
    return () => window.removeEventListener('resize', updateNewsStep);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setNewsSlide((current) => (current + 1) % newsArticles.length), 5200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!galleryLightbox) return undefined;
    const closeOnEscape = (event) => event.key === 'Escape' && setGalleryLightbox(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', closeOnEscape); };
  }, [galleryLightbox]);

  useEffect(() => {
    const node = statsSectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setStatsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setGuideSlide((current) => current >= tourGuides.length - 4 ? 0 : current + 1), 5200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (Math.abs(guideDrag) < 1) return undefined;
    const timer = window.setTimeout(() => setGuideDrag(0), 180);
    return () => window.clearTimeout(timer);
  }, [guideDrag]);


  useEffect(() => {
    const timer = window.setInterval(() => {
      setDirection('next');
      setSlide((current) => nextIndex(current, slides.length, 1));
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (categorySlide >= categoryStart + categoryCount + 1) {
      const timer = window.setTimeout(() => setCategorySlide(categoryStart), 730);
      return () => window.clearTimeout(timer);
    }
    if (categorySlide <= categoryStart - 2) {
      const timer = window.setTimeout(() => setCategorySlide(categoryStart + categoryCount - 1), 730);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [categorySlide]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const goToSlide = (index) => {
    if (index === slide) return;
    setDirection(index > slide ? 'next' : 'prev');
    setSlide(index);
  };

  const submit = (event) => {
    event.preventDefault();
    setMessage(`Searching ${form.destination || 'all destinations'} for ${form.travelers.toLowerCase()}...`);
  };

  const beginCategoryDrag = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    categoryPointer.current = { id: event.pointerId, x: event.clientX, dragged: false };
    event.currentTarget.setPointerCapture?.(event.pointerId);
    setCategoryDrag(0);
  };

  const moveCategoryDrag = (event) => {
    const pointer = categoryPointer.current;
    if (!pointer || pointer.id !== event.pointerId) return;
    const delta = event.clientX - pointer.x;
    if (Math.abs(delta) > 5) pointer.dragged = true;
    setCategoryDrag(delta);
  };

  const endCategoryDrag = (event) => {
    const pointer = categoryPointer.current;
    if (!pointer || pointer.id !== event.pointerId) return;
    const delta = event.clientX - pointer.x;
    if (Math.abs(delta) >= 55) setCategorySlide((current) => current + (delta < 0 ? 1 : -1));
    categoryPointer.current = null;
    setCategoryDrag(0);
    if (Math.abs(delta) >= 8) {
      setCategoryJustDragged(true);
      window.setTimeout(() => setCategoryJustDragged(false), 120);
    }
  };

  const beginHeroDrag = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    heroPointer.current = { id: event.pointerId, x: event.clientX };
    event.currentTarget.setPointerCapture?.(event.pointerId);
    setHeroDrag(0);
  };

  const moveHeroDrag = (event) => {
    const pointer = heroPointer.current;
    if (!pointer || pointer.id !== event.pointerId) return;
    setHeroDrag(event.clientX - pointer.x);
  };

  const endHeroDrag = (event) => {
    const pointer = heroPointer.current;
    if (!pointer || pointer.id !== event.pointerId) return;
    const delta = event.clientX - pointer.x;
    if (Math.abs(delta) >= 65) {
      setDirection(delta < 0 ? 'next' : 'prev');
      setSlide((current) => nextIndex(current, slides.length, delta < 0 ? 1 : -1));
    }
    heroPointer.current = null;
    setHeroDrag(0);
  };

  const beginTourDrag = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    tourPointer.current = { id: event.pointerId, x: event.clientX };
    event.currentTarget.setPointerCapture?.(event.pointerId);
    setTourDrag(0);
  };

  const moveTourDrag = (event) => {
    const pointer = tourPointer.current;
    if (!pointer || pointer.id !== event.pointerId) return;
    setTourDrag(event.clientX - pointer.x);
  };

  const endTourDrag = (event) => {
    const pointer = tourPointer.current;
    if (!pointer || pointer.id !== event.pointerId) return;
    const delta = event.clientX - pointer.x;
    const max = Math.max(0, popularTours.length - tourVisible);
    if (Math.abs(delta) >= 55) setTourSlide((current) => Math.max(0, Math.min(max, current + (delta < 0 ? 1 : -1))));
    tourPointer.current = null;
    setTourDrag(0);
  };

  const active = slides[slide];

  return (
    <main className="site" id="top">
      <div className="utility">
        <div className="container utility-inner">
          <div className="utility-left">
            <span><FontAwesomeIcon icon={faLocationDot} /> 45 New Eskaton Road, Austria</span><i aria-hidden="true" /><span><FontAwesomeIcon icon={faClock} /> Sun to Friday: 8.00 am - 7.00 pm</span>
          </div>
          <div className="utility-right">
            <button className="language" type="button">Language <FontAwesomeIcon icon={faChevronDown} /></button><span>FAQ</span><b aria-hidden="true" /><span>Support</span><b aria-hidden="true" /><span>Sign In / Register <FontAwesomeIcon icon={faUser} /></span>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="/" aria-label="Wanderly home"><div className="brand-mark" aria-hidden="true"><span className="orbit" /><span className="plane">✦</span><span className="globe" /></div><div className="brand-copy"><strong>Wanderly</strong><small>Explore World</small></div></a>
          <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
            <a className="active" href="/" onClick={() => setMenuOpen(false)}>Home</a><a href="/about" onClick={() => setMenuOpen(false)}>About Us</a><a href="/destinations" onClick={() => setMenuOpen(false)}>Destination <FontAwesomeIcon icon={faChevronDown} /></a><a href="/services" onClick={() => setMenuOpen(false)}>Service <FontAwesomeIcon icon={faChevronDown} /></a><a href="/activities" onClick={() => setMenuOpen(false)}>Activities <FontAwesomeIcon icon={faChevronDown} /></a><a href="/tour-guides" onClick={() => setMenuOpen(false)}>Pages <FontAwesomeIcon icon={faChevronDown} /></a><a href="/blog" onClick={() => setMenuOpen(false)}>Blog <FontAwesomeIcon icon={faChevronDown} /></a><a href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
          </nav>
          <button className="hamburger" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={menuOpen} type="button"><span /><span /><span /></button>
        </div>
      </header>

      <section className="hero" aria-label="Featured travel experiences" onPointerDown={beginHeroDrag} onPointerMove={moveHeroDrag} onPointerUp={endHeroDrag} onPointerCancel={endHeroDrag}>
        <div className="hero-slides" aria-live="polite">
          {slides.map((item, index) => <div className={`hero-slide ${index === slide ? 'is-active' : ''} ${index === slide ? direction : ''}`} key={item.image} aria-hidden={index !== slide} style={index === slide && heroDrag ? { transform: `translate3d(${heroDrag * 0.12}px,0,0)` } : undefined}><div className="hero-image" style={{ backgroundImage: `url("${item.image}")` }} /><div className="hero-overlay" /></div>)}
        </div>
        <div className="container hero-content">
          <div className={`hero-copy ${direction}`} key={`${slide}-${direction}`}><p className="eyebrow">{active.eyebrow}</p><h1>{active.title}</h1><p className="hero-description">{active.copy}</p><div className="hero-buttons"><a className="primary-btn" href="/destinations">Explore Tours <FontAwesomeIcon icon={faArrowRight} /></a><button className="secondary-btn" type="button" onClick={() => setVideoOpen(true)}><span className="play-circle"><FontAwesomeIcon icon={faPlay} /></span> Watch Video</button></div></div>
          <div className="hero-dots" aria-label="Hero slides">{slides.map((item, index) => <button key={item.image} type="button" className={index === slide ? 'dot active' : 'dot'} onClick={(event) => { event.stopPropagation(); goToSlide(index); }} aria-label={`Show slide ${index + 1}`} aria-current={index === slide} />)}</div>
        </div>

        <form className="search-panel container" onSubmit={submit} onPointerDown={(event) => event.stopPropagation()}>
          <div className="search-field"><span className="field-icon"><FontAwesomeIcon icon={faLocationDot} /></span><div><label htmlFor="destination">Where to?</label><select id="destination" value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })}><option value="">Select destination</option><option>Maldives</option><option>Switzerland</option><option>Dubai</option><option>Turkey</option><option>Bali</option></select></div><FontAwesomeIcon className="field-chevron" icon={faChevronDown} /></div>
          <div className="divider" />
          <div className="search-field"><span className="field-icon"><FontAwesomeIcon icon={faCalendarDays} /></span><div><label htmlFor="date">When?</label><input id="date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></div></div>
          <div className="divider" />
          <div className="search-field"><span className="field-icon"><FontAwesomeIcon icon={faUsers} /></span><div><label htmlFor="travelers">Travelers</label><select id="travelers" value={form.travelers} onChange={(e) => setForm({ ...form, travelers: e.target.value })}><option>1 Adult</option><option>2 Adults</option><option>3 Adults</option><option>4 Adults</option><option>5+ Adults</option></select></div><FontAwesomeIcon className="field-chevron" icon={faChevronDown} /></div>
          <div className="divider" />
          <div className="search-field"><span className="field-icon"><FontAwesomeIcon icon={faPlane} /></span><div><label htmlFor="tour-type">Tour type</label><select id="tour-type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}><option>All Experiences</option><option>Adventure</option><option>Beach Holidays</option><option>City Tours</option><option>Luxury Tours</option></select></div><FontAwesomeIcon className="field-chevron" icon={faChevronDown} /></div>
          <button className="search-submit" type="submit">Search <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
        {message && <div className="search-message" role="status">{message}</div>}
      </section>

      <section className="categories-section" id="activities" aria-labelledby="tour-categories-title">
        <div className="categories-pattern" aria-hidden="true" />
        <div className="container categories-container">
          <div className="section-heading"><p className="section-script">Wonderful Place For You</p><h2 id="tour-categories-title">Tour Categories</h2></div>
          <div className="categories-carousel" aria-roledescription="carousel" aria-label="Tour categories">
            <div className="categories-viewport" onPointerDown={beginCategoryDrag} onPointerMove={moveCategoryDrag} onPointerUp={endCategoryDrag} onPointerCancel={endCategoryDrag}>
              <div className="categories-track" style={{ '--category-index': categorySlide, '--drag-offset': `${categoryDrag}px` }}>
                {categories.map((category, index) => {
                  const relative = index - categorySlide;
                  return <article className={`category-card ${relative === 0 ? 'is-center' : relative === -1 ? 'is-left' : relative === 1 ? 'is-right' : ''}`} key={`${category.title}-${index}`}><a href="/destinations" className="category-image-link" aria-label={`Explore ${category.title}`} onClick={(event) => categoryJustDragged && event.preventDefault()}><div className="category-image-wrap"><img src={category.image} alt={category.title} loading={Math.abs(relative) < 3 ? 'eager' : 'lazy'} draggable="false" /></div></a><h3>{category.title}</h3><a href="/destinations" className="category-see-more" onClick={(event) => categoryJustDragged && event.preventDefault()}>See More</a></article>;
                })}
              </div>
            </div>
          </div>
          <div className="category-dots" aria-label="Tour category slides">{baseCategories.map((category, index) => { const logical = ((categorySlide - categoryStart) % categoryCount + categoryCount) % categoryCount; return <button key={`${category.title}-dot-${index}`} type="button" className={index === logical ? 'category-dot active' : 'category-dot'} onClick={() => setCategorySlide(categoryStart + index)} aria-label={`Show ${category.title}`} aria-current={index === logical} />; })}</div>
        </div>
      </section>

      <section className="destination-section" id="destinations" aria-labelledby="popular-destination-title">
        <div className="container destination-container">
          <div className="destination-heading">
            <p className="destination-script">Top Destination</p>
            <h2 id="popular-destination-title">Popular Destination</h2>
          </div>
          <div
            className="destination-carousel"
            onPointerDown={(event) => {
              if (event.pointerType === 'mouse' && event.button !== 0) return;
              destinationPointer.current = { id: event.pointerId, x: event.clientX };
              event.currentTarget.setPointerCapture?.(event.pointerId);
              setDestinationDrag(0);
            }}
            onPointerMove={(event) => {
              const pointer = destinationPointer.current;
              if (!pointer || pointer.id !== event.pointerId) return;
              setDestinationDrag(event.clientX - pointer.x);
            }}
            onPointerUp={(event) => {
              const pointer = destinationPointer.current;
              if (!pointer || pointer.id !== event.pointerId) return;
              const delta = event.clientX - pointer.x;
              if (Math.abs(delta) >= 55) setDestinationSlide((current) => nextIndex(current, destinations.length, delta < 0 ? 1 : -1));
              destinationPointer.current = null;
              setDestinationDrag(0);
            }}
            onPointerCancel={() => { destinationPointer.current = null; setDestinationDrag(0); }}
          >
            <div className="destination-viewport">
              <div className="destination-track" style={{ transform: `translate3d(calc(-${destinationSlide * destinationStep + destinationStep / 2}px + ${destinationDrag}px),0,0)` }}>
                {destinations.map((item, index) => {
                  const relative = ((index - destinationSlide + destinations.length + 2) % destinations.length) - 2;
                  const isCenter = relative === 0;
                  return (
                    <article className={`destination-card ${isCenter ? 'is-center' : ''} ${relative < 0 ? 'is-left' : relative > 0 ? 'is-right' : ''} relative-${relative}`} key={`${item.name}-${index}`}>
                      <div className="destination-image" style={{ backgroundImage: `url("${item.image}")` }} />
                      <div className="destination-overlay" />
                      <div className="destination-info">
                        <div>
                          <h3>{item.name}</h3>
                          <p>{item.listing} Listing</p>
                        </div>
                        <button type="button" className="destination-view" onClick={() => setDestinationMessage(`Exploring ${item.name}`)}>
                          View All <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
            <button className="destination-nav destination-prev" type="button" aria-label="Previous destination" onClick={() => setDestinationSlide((current) => nextIndex(current, destinations.length, -1))}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="destination-nav destination-next" type="button" aria-label="Next destination" onClick={() => setDestinationSlide((current) => nextIndex(current, destinations.length, 1))}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </div>
          <div className="destination-dots" aria-label="Popular destinations">
            {destinations.map((item, index) => (
              <button key={`${item.name}-${index}`} type="button" className={index === destinationSlide ? 'destination-dot active' : 'destination-dot'} onClick={() => setDestinationSlide(index)} aria-label={`Show ${item.name}`} aria-current={index === destinationSlide} />
            ))}
          </div>
          {destinationMessage && <div className="destination-toast" role="status">{destinationMessage}</div>}
        </div>
      </section>

      <section ref={aboutSectionRef} className={`plan-section ${aboutVisible ? 'is-visible' : ''}`} id="about" aria-labelledby="plan-trip-title">
        <div className="container plan-container">
          <div className="plan-gallery" aria-label="Travel experiences">
            <button className="plan-photo plan-photo-large" type="button" aria-label="Explore mountain adventures" onClick={() => setAboutMessage('Mountain adventures are coming soon.')}>
              <img src="https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=900&q=88" alt="Traveler standing in the mountains" loading="lazy" draggable="false" />
            </button>
            <button className="plan-photo plan-photo-top" type="button" aria-label="Explore kayaking adventures" onClick={() => setAboutMessage('Water adventures are coming soon.')}>
              <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=700&q=88" alt="Kayaking on a mountain lake" loading="lazy" draggable="false" />
            </button>
            <button className="plan-photo plan-photo-bottom" type="button" aria-label="Explore city tours" onClick={() => setAboutMessage('City tours are coming soon.')}>
              <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=700&q=88" alt="Friends exploring a European city" loading="lazy" draggable="false" />
            </button>
          </div>

          <div className="plan-copy">
            <p className="plan-script">Let's Go Together</p>
            <h2 id="plan-trip-title">Plan Your Trip<br />With us</h2>
            <p className="plan-intro">There are many variations of passages of available but the majority have suffered alteration in some form, by injected humour randomised words which don't look even slightly.</p>

            <div className="plan-features">
              <article className="plan-feature">
                <span className="plan-feature-icon"><FontAwesomeIcon icon={faRoute} /></span>
                <div><h3>Exclusive Trip</h3><p>There are many variations of passages of available but the majority.</p></div>
              </article>
              <article className="plan-feature">
                <span className="plan-feature-icon"><FontAwesomeIcon icon={faUserTie} /></span>
                <div><h3>Professional Guide</h3><p>There are many variations of passages of available but the majority.</p></div>
              </article>
            </div>

            <button className="plan-learn" type="button" onClick={() => { setAboutMessage('Discover more travel experiences with Wanderly.'); document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Learn More <FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>
        {aboutMessage && <div className="plan-toast" role="status">{aboutMessage}</div>}
      </section>


      <section className="popular-tours-section" id="tours" aria-labelledby="popular-tours-title">
        <div className="tours-pattern" aria-hidden="true" />
        <div className="container tours-container">
          <div className="tours-heading section-heading">
            <p className="section-script">Best Place For You</p>
            <h2 id="popular-tours-title">Most Popular Tour</h2>
            <p className="tours-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="tours-carousel" onPointerDown={beginTourDrag} onPointerMove={moveTourDrag} onPointerUp={endTourDrag} onPointerCancel={endTourDrag}>
            <div className="tours-viewport">
              <div className="tours-track" style={{ '--tour-visible': tourVisible, '--tour-count': popularTours.length, transform: `translate3d(calc(-${tourSlide} * (var(--tour-card-width) + var(--tour-gap)) + ${tourDrag}px),0,0)` }}>
                {popularTours.map((tour, index) => (
                  <article className="tour-card" key={tour.name}>
                    <div className="tour-card-image"><img src={tour.image} alt={tour.name} loading={index < 3 ? 'eager' : 'lazy'} draggable="false" /></div>
                    <div className="tour-card-body">
                      <h3>{tour.name}</h3>
                      <div className="tour-rating"><span>{Array.from({ length: 5 }).map((_, star) => <FontAwesomeIcon icon={faStar} key={star} />)}</span><strong>({tour.rating} Rating)</strong></div>
                      <div className="tour-price"><b>{tour.price}</b><span>/Person</span></div>
                    </div>
                    <div className="tour-card-footer"><span><FontAwesomeIcon icon={faClock} /> {tour.duration}</span><button type="button" onClick={() => setTourMessage(`${tour.name} selected — booking is ready.`)}>Book Now <FontAwesomeIcon icon={faArrowRight} /></button></div>
                  </article>
                ))}
              </div>
            </div>
            <button className="tour-nav tour-prev" type="button" aria-label="Previous tours" onClick={() => setTourSlide((current) => Math.max(0, current - 1))}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button className="tour-nav tour-next" type="button" aria-label="Next tours" onClick={() => setTourSlide((current) => Math.min(Math.max(0, popularTours.length - tourVisible), current + 1))}><FontAwesomeIcon icon={faChevronRight} /></button>
          </div>
          <div className="tour-dots" aria-label="Popular tour pages">
            {Array.from({ length: Math.max(1, popularTours.length - tourVisible + 1) }).map((_, index) => <button key={index} type="button" className={index === tourSlide ? 'tour-dot active' : 'tour-dot'} onClick={() => setTourSlide(index)} aria-label={`Show tour page ${index + 1}`} aria-current={index === tourSlide} />)}
          </div>
          {tourMessage && <div className="tour-toast" role="status">{tourMessage}</div>}
        </div>
      </section>

      <section className="recent-gallery-section" id="gallery" aria-labelledby="recent-gallery-title">
        <div className="container gallery-container">
          <div className="gallery-heading section-heading">
            <p className="section-script">Make Your Tour More Pleasure</p>
            <h2 id="recent-gallery-title">Recent Gallery</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((item, index) => (
              <button type="button" className={`gallery-item gallery-item-${index + 1}`} key={item.alt + index} onClick={() => setGalleryLightbox(index)} aria-label={`Open ${item.alt}`}>
                <img src={item.image} alt={item.alt} loading={index < 5 ? 'eager' : 'lazy'} draggable="false" />
                <span className="gallery-hover"><FontAwesomeIcon icon={faExpand} /></span>
              </button>
            ))}
          </div>
        </div>
        {galleryLightbox !== null && (
          <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Gallery image" onClick={() => setGalleryLightbox(null)}>
            <button type="button" className="gallery-close" aria-label="Close gallery" onClick={() => setGalleryLightbox(null)}><FontAwesomeIcon icon={faXmark} /></button>
            <button type="button" className="gallery-lightbox-nav gallery-lightbox-prev" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); setGalleryLightbox((current) => (current - 1 + galleryImages.length) % galleryImages.length); }}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <img src={galleryImages[galleryLightbox].image} alt={galleryImages[galleryLightbox].alt} onClick={(event) => event.stopPropagation()} />
            <button type="button" className="gallery-lightbox-nav gallery-lightbox-next" aria-label="Next image" onClick={(event) => { event.stopPropagation(); setGalleryLightbox((current) => (current + 1) % galleryImages.length); }}><FontAwesomeIcon icon={faChevronRight} /></button>
          </div>
        )}
      </section>

      <section className={`stats-section${statsVisible ? ' stats-visible' : ''}`} id="stats" ref={statsSectionRef} aria-label="Travel statistics">
        <div className="stats-pattern" aria-hidden="true" />
        <div className="container stats-container">
          <div className="stats-grid">
            {[
              { value: '12', label: 'Years Experience' },
              { value: '97%', label: 'Retention Rate' },
              { value: '8K', label: 'Tour Completed' },
              { value: '19K', label: 'Happy Travellers' },
            ].map((stat, index) => (
              <article className={`stat-item stat-item-${index + 1}`} key={stat.label}>
                <div className="stat-orbit">
                  <span className="stat-orbit-dot" aria-hidden="true" />
                  <div className="stat-inner">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tour-guide-section" id="guides" aria-labelledby="tour-guide-title">
        <div className="tour-guide-pattern" aria-hidden="true" />
        <div className="container guide-container">
          <div className="guide-heading">
            <p className="section-script">Meet with Guide</p>
            <h2 id="tour-guide-title">Tour Guide</h2>
          </div>

          <div
            className="guide-carousel"
            onPointerDown={(event) => {
              guidePointer.current = { id: event.pointerId, x: event.clientX };
              event.currentTarget.setPointerCapture?.(event.pointerId);
            }}
            onPointerMove={(event) => {
              if (!guidePointer.current || guidePointer.current.id !== event.pointerId) return;
              setGuideDrag(event.clientX - guidePointer.current.x);
            }}
            onPointerUp={(event) => {
              if (!guidePointer.current || guidePointer.current.id !== event.pointerId) return;
              const delta = event.clientX - guidePointer.current.x;
              if (Math.abs(delta) > 55) setGuideSlide((current) => delta < 0 ? (current >= tourGuides.length - 4 ? 0 : current + 1) : (current <= 0 ? tourGuides.length - 4 : current - 1));
              guidePointer.current = null;
              setGuideDrag(0);
            }}
            onPointerCancel={() => { guidePointer.current = null; setGuideDrag(0); }}
          >
            <div className="guide-viewport">
              <div className="guide-track" style={{ transform: `translate3d(calc(-${guideSlide * 285}px + ${guideDrag}px),0,0)` }}>
                {tourGuides.map((guide) => (
                  <article className="guide-card" key={guide.name}>
                    <div className="guide-photo"><img src={guide.image} alt={guide.name} draggable="false" /></div>
                    <div className="guide-card-inner">
                      <h3>{guide.name}</h3>
                      <p>{guide.role}</p>
                      <div className="guide-socials">
                        <a href="https://facebook.com" aria-label={`${guide.name} Facebook`}><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://twitter.com" aria-label={`${guide.name} Twitter`}><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://instagram.com" aria-label={`${guide.name} Instagram`}><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://linkedin.com" aria-label={`${guide.name} LinkedIn`}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="guide-dots">
            {Array.from({ length: tourGuides.length - 3 }).map((_, index) => (
              <button key={index} type="button" className={`guide-dot${index === guideSlide ? ' active' : ''}`} onClick={() => setGuideSlide(index >= tourGuides.length - 4 ? tourGuides.length - 4 : index)} aria-label={`Show guide slide ${index + 1}`} aria-current={index === guideSlide} />
            ))}
          </div>
        </div>
        <button className="guide-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">↑</button>
      </section>


      <section className="testimonial-section" id="testimonials" aria-labelledby="testimonial-title">
        <div className="container testimonial-heading-wrap">
          <div className="testimonial-heading">
            <p className="section-script">Testimonial</p>
            <h2 id="testimonial-title">What Clients Say About Us</h2>
          </div>
        </div>

        <div
          className="testimonial-carousel"
          onPointerDown={(event) => {
            testimonialPointer.current = { id: event.pointerId, x: event.clientX };
            event.currentTarget.setPointerCapture?.(event.pointerId);
          }}
          onPointerMove={(event) => {
            if (!testimonialPointer.current || testimonialPointer.current.id !== event.pointerId) return;
            setTestimonialDrag(event.clientX - testimonialPointer.current.x);
          }}
          onPointerUp={(event) => {
            if (!testimonialPointer.current || testimonialPointer.current.id !== event.pointerId) return;
            const delta = event.clientX - testimonialPointer.current.x;
            if (Math.abs(delta) > 55) {
              setTestimonialSlide((current) => (current + (delta < 0 ? 1 : -1) + testimonials.length) % testimonials.length);
            }
            testimonialPointer.current = null;
            setTestimonialDrag(0);
          }}
          onPointerCancel={() => { testimonialPointer.current = null; setTestimonialDrag(0); }}
        >
          <div className="testimonial-viewport">
            <div
              className="testimonial-track"
              style={{ marginLeft: `calc(var(--testimonial-offset) - ${testimonialSlide * testimonialStep}px + ${testimonialDrag}px)` }}
            >
              {testimonials.map((item, index) => (
                <article className={`testimonial-card${index === testimonialSlide ? ' is-active' : ''}`} key={item.name + index}>
                  <div className="testimonial-avatar-wrap">
                    <img src={item.image} alt={item.name} className="testimonial-avatar" draggable="false" />
                  </div>
                  <div className="testimonial-card-top">
                    <div>
                      <h3>{item.name}</h3>
                      <span>{item.role}</span>
                    </div>
                    <div className="testimonial-stars" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, star) => <FontAwesomeIcon icon={faStar} key={star} />)}
                    </div>
                  </div>
                  <p className="testimonial-text">{item.quote}</p>
                  <div className="testimonial-quote-mark" aria-hidden="true">99</div>
                </article>
              ))}
            </div>
          </div>

          <button type="button" className="testimonial-nav testimonial-prev" aria-label="Previous testimonial" onClick={() => setTestimonialSlide((current) => (current - 1 + testimonials.length) % testimonials.length)}><FontAwesomeIcon icon={faChevronLeft} /></button>
          <button type="button" className="testimonial-nav testimonial-next" aria-label="Next testimonial" onClick={() => setTestimonialSlide((current) => (current + 1) % testimonials.length)}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>

        <div className="testimonial-dots" aria-label="Testimonial slides">
          {testimonials.map((_, index) => (
            <button type="button" key={index} className={`testimonial-dot${index === ((testimonialSlide + 3) % testimonials.length) ? ' active' : ''}`} onClick={() => setTestimonialSlide((index - 3 + testimonials.length) % testimonials.length)} aria-label={`Show testimonial ${index + 1}`} aria-current={index === ((testimonialSlide + 3) % testimonials.length)} />
          ))}
        </div>

        <button className="testimonial-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">↑</button>
      </section>


      <section className="brand-showcase-section" aria-label="Travel partners and adventure brands">
        <div
          className="brand-carousel"
          onPointerDown={(event) => {
            brandPointer.current = { id: event.pointerId, x: event.clientX };
            event.currentTarget.setPointerCapture?.(event.pointerId);
          }}
          onPointerMove={(event) => {
            if (!brandPointer.current || brandPointer.current.id !== event.pointerId) return;
            setBrandDrag(event.clientX - brandPointer.current.x);
          }}
          onPointerUp={(event) => {
            if (!brandPointer.current || brandPointer.current.id !== event.pointerId) return;
            const delta = event.clientX - brandPointer.current.x;
            if (Math.abs(delta) > 45) setBrandIndex((current) => (current + (delta < 0 ? 1 : -1) + brandLogos.length) % brandLogos.length);
            brandPointer.current = null;
            setBrandDrag(0);
          }}
          onPointerCancel={() => { brandPointer.current = null; setBrandDrag(0); }}
        >
          <div className="brand-viewport">
            <div className="brand-track" style={{ transform: `translate3d(calc(-${brandIndex * 180}px + ${brandDrag}px),0,0)` }}>
              {[...brandLogos, ...brandLogos].map((brand, index) => (
                <div className={`brand-logo${brand.partial ? ' brand-logo-partial' : ''}`} key={`${brand.name}-${index}`}>
                  <img src={brand.image} alt={brand.name} draggable="false" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="news-section" id="blog" aria-labelledby="news-title">
        <div className="news-pattern" aria-hidden="true" />
        <div className="container news-container">
          <div className="news-heading-row">
            <div className="news-heading">
              <p className="section-script">About Us Restaurant</p>
              <h2 id="news-title">News &amp; Articles From<br className="news-title-break" /> Tourm</h2>
            </div>
            <button type="button" className="news-more-button" onClick={() => setMessage('Opening all articles…')}>
              <span>See More Articles</span><FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          <div
            className="news-carousel"
            onPointerDown={(event) => {
              newsPointer.current = { id: event.pointerId, x: event.clientX };
              event.currentTarget.setPointerCapture?.(event.pointerId);
            }}
            onPointerMove={(event) => {
              if (!newsPointer.current || newsPointer.current.id !== event.pointerId) return;
              setNewsDrag(event.clientX - newsPointer.current.x);
            }}
            onPointerUp={(event) => {
              if (!newsPointer.current || newsPointer.current.id !== event.pointerId) return;
              const delta = event.clientX - newsPointer.current.x;
              if (Math.abs(delta) > 55) setNewsSlide((current) => nextIndex(current, newsArticles.length, delta < 0 ? 1 : -1));
              newsPointer.current = null;
              setNewsDrag(0);
            }}
            onPointerCancel={() => { newsPointer.current = null; setNewsDrag(0); }}
          >
            <div className="news-viewport">
              <div className="news-track" style={{ transform: `translate3d(calc(-${newsSlide * newsStep}px + ${newsDrag}px),0,0)` }}>
                {newsArticles.map((article) => (
                  <article className="news-card" key={article.title}>
                    <div className="news-image-wrap">
                      <img src={article.image} alt={article.title} loading="lazy" draggable="false" />
                    </div>
                    <div className="news-meta"><span>{article.date}</span><i aria-hidden="true" /> <span>{article.read}</span></div>
                    <h3>{article.title}</h3>
                    <button type="button" className="news-read-button" onClick={() => setMessage(`Opening: ${article.title}`)}>
                      <span>Read More</span><FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </div>
          {message && <div className="section-toast" role="status">{message}</div>}
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-top-strip" aria-hidden="true" />
        <section className="footer-newsletter" aria-labelledby="footer-newsletter-title">
          <div className="container footer-newsletter-inner">
            <h2 id="footer-newsletter-title">Get Updated The<br />Latest Newsletter</h2>
            <form className="footer-newsletter-form" onSubmit={(event) => {
              event.preventDefault();
              if (!newsletterEmail.trim()) return;
              setMessage(`Newsletter subscription received for ${newsletterEmail.trim()}`);
              setNewsletterEmail('');
            }}>
              <input type="email" value={newsletterEmail} onChange={(event) => setNewsletterEmail(event.target.value)} placeholder="Enter Email" aria-label="Email address" required />
              <button type="submit">Subscribe Now <span aria-hidden="true">⌁</span></button>
            </form>
          </div>
        </section>

        <section className="footer-main">
          <div className="container footer-grid">
            <div className="footer-brand-column">
              <a className="footer-brand" href="/" aria-label="Tourm home">
                <div className="footer-brand-mark" aria-hidden="true"><span className="footer-orbit" /><span className="footer-plane">✦</span><span className="footer-globe" /></div>
                <div className="footer-brand-copy"><strong>Tourm</strong><small>Explore World</small></div>
              </a>
              <p>Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures</p>
              <div className="footer-socials">
                <a href="https://facebook.com" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="https://twitter.com" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://linkedin.com" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="https://whatsapp.com" aria-label="WhatsApp"><span>◔</span></a>
                <a href="https://instagram.com" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
              </div>
            </div>

            <div className="footer-links-column">
              <h3>Quick Links</h3>
              <a href="/"><span>›</span> Home</a>
              <a href="/about"><span>›</span> About us</a>
              <a href="/services"><span>›</span> Our Service</a>
              <a href="/terms"><span>›</span> Terms of Service</a>
              <a href="/booking"><span>›</span> Tour Booking Now</a>
            </div>

            <div className="footer-address-column">
              <h3>Address</h3>
              <div className="footer-contact-row"><span className="footer-contact-icon"><FontAwesomeIcon icon={faPhone} /></span><p>+01 234 567 890<br />+09 876 543 210</p></div>
              <div className="footer-contact-row"><span className="footer-contact-icon"><FontAwesomeIcon icon={faEnvelope} /></span><p>mailinfo00@tourm.com<br />support24@tourm.com</p></div>
              <div className="footer-contact-row"><span className="footer-contact-icon"><FontAwesomeIcon icon={faLocationDot} /></span><p>789 Inner Lane, Holy park,<br />California, USA</p></div>
            </div>

            <div className="footer-instagram-column">
              <h3>Instagram Post</h3>
              <div className="footer-instagram-grid">
                {instagramPosts.map((post) => <a href="https://instagram.com" key={post.alt} aria-label={post.alt}><img src={post.image} alt={post.alt} loading="lazy" /></a>)}
              </div>
            </div>
          </div>
        </section>

        <section className="footer-bottom">
          <div className="footer-bottom-overlay" aria-hidden="true" />
          <div className="container footer-bottom-inner">
            <p>Copyright 2025 Tourm. All Rights Reserved.</p>
            <div className="footer-payments"><strong>We Accept</strong><span className="payment payment-mastercard"><i /> <b /></span><span className="payment payment-visa">VISA</span><span className="payment payment-paypal">PayPal</span><span className="payment payment-apple"> Pay</span></div>
          </div>
          <button className="footer-top-button" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">↑</button>
        </section>
      </footer>

      {videoOpen && <div className="video-modal" role="dialog" aria-modal="true" aria-label="Travel video"><button className="modal-close" type="button" onClick={() => setVideoOpen(false)} aria-label="Close video"><FontAwesomeIcon icon={faXmark} /></button><div className="video-card"><div className="video-placeholder"><FontAwesomeIcon icon={faPlay} /></div><h2>Explore the world with Wanderly</h2><p>Connect this area to your travel video when the content is ready.</p></div></div>}
    </main>
  );
}
