#!/usr/bin/env node

import greet from '../src/cli.js';
import even from '../src/games.js';

const name = greet();
if (even()) console.log(`Congratulations, ${name}!`);
