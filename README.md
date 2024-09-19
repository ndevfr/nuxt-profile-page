# Virtual Business Card

This project developped with NuxtJs create a virtual business card website using a json configuration file.

There is a button to generate and download the informations in .vcf file.

Edit the config.json file in the root directory to add your personal informations before compiling the project :

```json
{
  "profile": {
    "firstname": "Firstname",
    "lastname": "Lastname",
    "subtitle": "Subtitle",
    "phone": "+33 0 00 00 00 00",
    "email": "mail@provider.com",
    "city": "Your city"
  },
  "socials": [
    {
      "title": "GitHub",
      "icon": "simple-icons:github",
      "url": "https://github.com/your-username"
    },
    {
      "title": "...",
      "icon": "...",
      "url": "..."
    }
  ],
  "links": [
    {
      "label": "portfolio",
      "title": "Portfolio",
      "icon": "uil:link",
      "url": "https://ndev.fr"
    },
    {
      "label": "...",
      "title": "...",
      "icon": "...",
      "url": "..."
    }
  ],
  "jobs": [
    {
      "label": "Emploi",
      "company": "Your company",
      "position": "Your position"
    }
  ],
  "certs": [
    {
      "label": "Formation",
      "university": "Your university",
      "degree": "Your degree"
    }
  ],
  "colors": {
    "primary": "#202020",
    "secondary": "#333333",
    "accent": "#101010",
    "backgroundTop": "#FDFDFD",
    "backgroundBottom": "#EEEEEE",
    "avatarFilter": "saturate(0.8)"
  },
  "base64Avatar": "data:image/jpeg;base64,..."
}
```

The icons (collections and references) refer to the website https://icones.js.org/

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
