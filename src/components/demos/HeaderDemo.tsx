import { Header } from '@/components/ui/header';
import { Settings, HelpCircle, FileText, BarChart3, Users, CreditCard } from 'lucide-react';

const navMenu = [
	{
		href: '/component/header',
		label: 'Products',
		submenu: [
			{
				href: '/component/header',
				icon: <BarChart3 className="h-4 w-4" />,
				label: 'Analytics',
				desc: 'Advanced analytics and reporting tools for your business.',
			},
			{
				href: '/component/header',
				icon: <Users className="h-4 w-4" />,
				label: 'Team Management',
				desc: 'Collaborate with your team and manage permissions.',
			},
			{
				href: '/component/header',
				icon: <CreditCard className="h-4 w-4" />,
				label: 'Billing',
				desc: 'Manage your subscription and billing information.',
			},
			{
				href: '/component/header',
				icon: <FileText className="h-4 w-4" />,
				label: 'Documentation',
				desc: 'Comprehensive guides and API documentation.',
			},
		],
	},
	{
		href: '/component/header',
		label: 'Features',
		submenu: [
			{
				href: '/component/header',
				icon: <Settings className="h-4 w-4" />,
				label: 'Automation',
				desc: 'Automate your workflows and save time.',
			},
			{
				href: '/component/header',
				icon: <HelpCircle className="h-4 w-4" />,
				label: 'Integrations',
				desc: 'Connect with your favorite tools and services.',
			},
		],
	},
	{
		href: '/component/header',
		label: 'Pricing',
	},
];

const headerButtons = [
	{
		text: 'Sign In',
		variant: 'ghost' as const,
		href: '/component/header',
	},
	{
		text: 'Get Started',
		variant: 'default' as const,
		href: '/components/header',
	},
];

export default function HeaderDemo() {
	return (
		<div className="w-full">
			<Header
				navMenu={navMenu}
				logoSrc="/vite.svg"
				logoVariant="favicon"
				logoAlt="Vite Logo"
				logoHref="/"
				className="border-b"
				showMobileMenu={true}
				buttons={headerButtons}
			/>
		</div>
	);
}
