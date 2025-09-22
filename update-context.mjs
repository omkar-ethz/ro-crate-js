/**
 * Update the local cache of the RO-Crate default context from the default context URL.
 */

import { writeFile } from 'node:fs/promises';
import { Readable } from 'node:stream';
import defaults from './lib/defaults.js';

const res = await fetch(defaults.roCrateContextUrl);
await writeFile('lib/context.json', Readable.fromWeb(res.body));
