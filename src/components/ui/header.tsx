import * as React from 'react';
import { Button } from './button';
import { Logo } from '@/components/logo';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from './navigation-menu';
import MobileMenu from '@/components/mobile-menu';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

export type MenuItem = {
	href: string;
	label: string;
	submenu?: SubmenuItem[];
};

export type SubmenuItem = {
	href: string;
	icon: React.JSX.Element;
	label: string;
	desc: string;
};

export type HeaderButton = {
	text: string;
	variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
	size?: 'default' | 'sm' | 'lg' | 'icon';
	href?: string;
	onClick?: () => void;
	className?: string;
};

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
	navMenu?: MenuItem[];
	logoVariant?: 'default' | 'favicon' | 'large';
	logoHref?: string;
	logoSrc?: string;
	logoAlt?: string;
	customLogo?: React.ReactNode;
	showMobileMenu?: boolean;
	containerClassName?: string;
	rightContent?: React.ReactNode;
	// Generic buttons configuration
	buttons?: HeaderButton[];
	buttonsClassName?: string;
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
	(
		{
			className,
			navMenu = [],
			logoVariant = 'favicon',
			logoHref = '/',
			logoSrc,
			logoAlt,
			customLogo,
			showMobileMenu = true,
			containerClassName,
			rightContent,
			buttons = [],
			buttonsClassName,
			...props
		},
		ref
	) => {
		return (
			<header
				ref={ref}
				className={cn(
					'border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur',
					className
				)}
				{...props}
			>
				<div
					className={cn(
						'container flex h-14 max-w-screen-2xl items-center',
						containerClassName
					)}
				>
					{/* Logo */}
					{customLogo ? (
						customLogo
					) : logoSrc ? (
						<a href={logoHref} className="flex items-center space-x-2">
							<img src={logoSrc} alt={logoAlt || 'Logo'} className="h-8 w-8" />
						</a>
					) : (
						<Logo variant={logoVariant} href={logoHref} />
					)}

					{/* Desktop Navigation */}
					{navMenu.length > 0 && (
						<NavigationMenu className="mx-6 hidden lg:flex">
							<NavigationMenuList>
								{navMenu.map((item) => (
									<NavigationMenuItem key={item.href}>
										{item.submenu ? (
											<>
												<NavigationMenuTrigger>
													{item.label}
												</NavigationMenuTrigger>
												<NavigationMenuContent>
													<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
														{item.submenu.map((subItem) => (
															<li key={subItem.href}>
																<NavigationMenuLink asChild>
																	<a
																		className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
																		href={subItem.href}
																	>
																		<div className="flex items-center gap-2">
																			{subItem.icon}
																			<div className="text-sm leading-none font-medium">
																				{subItem.label}
																			</div>
																		</div>
																		<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
																			{subItem.desc}
																		</p>
																	</a>
																</NavigationMenuLink>
															</li>
														))}
													</ul>
												</NavigationMenuContent>
											</>
										) : (
											<NavigationMenuLink asChild>
												<a
													className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
													href={item.href}
												>
													{item.label}
												</a>
											</NavigationMenuLink>
										)}
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>
					)}

					{/* Right side content */}
					<div className={cn('ml-auto flex items-center space-x-2', buttonsClassName)}>
						{rightContent ? (
							rightContent
						) : buttons.length > 0 ? (
							<>
								{buttons.map((button, index) => {
									const buttonClassName = cn('hidden lg:flex', button.className);

									return button.href ? (
										<Button
											key={index}
											variant={button.variant || 'default'}
											size={button.size}
											className={buttonClassName}
											asChild
										>
											<a href={button.href}>{button.text}</a>
										</Button>
									) : (
										<Button
											key={index}
											variant={button.variant || 'default'}
											size={button.size}
											className={buttonClassName}
											onClick={button.onClick}
										>
											{button.text}
										</Button>
									);
								})}
							</>
						) : null}
					</div>

					{/* Mobile Menu */}
					{showMobileMenu && navMenu.length > 0 && (
						<Popover>
							<PopoverTrigger asChild>
								<Button variant="ghost" size="icon" className="lg:hidden">
									<Menu className="h-5 w-5" />
									<span className="sr-only">Toggle menu</span>
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-80" align="end">
								<MobileMenu navMenu={navMenu} />
							</PopoverContent>
						</Popover>
					)}
				</div>
			</header>
		);
	}
);
Header.displayName = 'Header';

export { Header };
