import { IEvents } from '@/core';
import mitt, { Emitter } from 'mitt';

const emitter: Emitter<IEvents> = mitt<IEvents>();

export default emitter;