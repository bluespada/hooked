
export type ExtensionLicense = 
| "MIT"
| "GPL-2.0"
| "Apache-2.0"
| "GPL-3.0"
| "BSD-3-Clause"
| "Unlicense"
| "BSD-2-Clause"
| "LGPL-3.0"
| "AGPL-3.0";

export interface ExtensionMetadata {
    name: string
    author: { name: string, email: string, website: string  } | string
    summary?: string
    description?: string
    license?: ExtensionLicense
}