/* eslint-disable */

import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from "astro-boilerplate-components";

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              src="/assets/images/flag-for-mexico.svg"
              className="w-[50px] mr-4"
            />
          }
          name="Tite Alvarado"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/https://github.com/enrique-dev-coder/">
          GitHub
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
