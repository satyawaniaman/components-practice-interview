import { Button } from './ui/button';
import { ChevronsUpDownIcon } from 'lucide-react';
import { Separator } from './ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { JSX } from 'react';
type MenuItem = {
	href: string;
	label: string;
	submenu?: SubmenuItem[];
};
type SubmenuItem = {
	href: string;
	icon: JSX.Element;
	label: string;
	desc: string;
};
type MobileMenuProps = {
	navMenu: MenuItem[];
};
function MobileMenu({ navMenu }: MobileMenuProps) {
	return (
		<div>
			<ul className="mb-3">
				{navMenu.map(({ href, label, submenu }, index) => (
					<li key={index}>
						{submenu ? (
							<Collapsible>
								<CollapsibleTrigger asChild>
								<Button
									asChild
									variant="ghost"
									className="w-full justify-between active:bg-muted/50 focus:bg-muted/50 transition-colors duration-200"
								>
										<span className="flex w-full items-center justify-between">
											{label}
											<ChevronsUpDownIcon className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
										</span>
									</Button>
								</CollapsibleTrigger>
								<CollapsibleContent className="ps-2">
									<ul className="border-l-muted-foreground/20 border-l">
										{submenu.map(({ href, label }, subIndex) => (
											<li key={subIndex}>
												<Button
													asChild
													variant="ghost"
													className="text-muted-foreground w-full justify-start active:bg-muted/50 focus:bg-muted/50 transition-colors duration-200"
												>
													<a href={href}>{label}</a>
												</Button>
											</li>
										))}
									</ul>
								</CollapsibleContent>
							</Collapsible>
						) : (
							<Button asChild variant="ghost" className="w-full justify-start active:bg-muted/50 focus:bg-muted/50 transition-colors duration-200">
						<a href={href}>{label}</a>
					</Button>
						)}
					</li>
				))}
			</ul>
			<Separator className="bg-muted-foreground/20" />
			<div className="mt-3 flex w-full min-w-0 flex-row gap-2">
					<Button variant="ghost" className="min-w-0 flex-1 active:bg-muted/50 focus:bg-muted/50 transition-colors duration-200">
					Sign In
				</Button>
				<Button className="min-w-0 flex-1 active:bg-primary/90 focus:bg-primary/90 transition-colors duration-200">Free Trial</Button>
			</div>
		</div>
	);
}

export default MobileMenu;
