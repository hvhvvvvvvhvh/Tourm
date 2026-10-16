import {PageLayout} from '../components';
export function generateStaticParams(){return ['about','destinations','services','activities','tour-guides','testimonials','gallery','blog','contact','faq','booking','terms','tour-details'].map(slug=>({slug}));}
export async function generateMetadata({params}){const {slug}=await params;const label=slug.split('-').map(s=>s[0]?.toUpperCase()+s.slice(1)).join(' ');return {title:`${label} | Wanderly Travel`,description:`Explore ${label.toLowerCase()} with Wanderly. Plan memorable travel experiences and enquire about your next tour.`};}
export default async function ContentPage({params}){const {slug}=await params;return <PageLayout slug={slug}/>;}
