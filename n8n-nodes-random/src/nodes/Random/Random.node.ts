
import type { IExecuteFunctions } from 'n8n-workflow';

import {
INodeExecutionData,
INodeType,
INodeTypeDescription,
} from 'n8n-workflow';
import axios from 'axios';



export class Random implements INodeType {
description: INodeTypeDescription = {
displayName: 'Random',
name: 'random',
icon: 'file:logo_onfly.svg',
group: ['transform'],
version: 1,
description: 'Generate true random numbers using random.org',
defaults: {
name: 'Random',
},
inputs: ['main'],
outputs: ['main'],
properties: [
{
displayName: 'Operation',
name: 'operation',
type: 'options',
options: [
{
name: 'True Random Number Generator',
value: 'trng',
},
],
default: 'trng',
description: 'Choose the operation to perform',
},
{
displayName: 'Min',
name: 'min',
type: 'number',
default: 1,
required: true,
description: 'Minimum integer (inclusive).',
},
{
displayName: 'Max',
name: 'max',
type: 'number',
default: 60,
required: true,
description: 'Maximum integer (inclusive).',
},
],
};


async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
const items = this.getInputData();
const returnData: INodeExecutionData[] = [];


for (let i = 0; i < items.length; i++) {
const operation = this.getNodeParameter('operation', i) as string;


if (operation === 'trng') {
const min = this.getNodeParameter('min', i) as number;
const max = this.getNodeParameter('max', i) as number;


if (!Number.isInteger(min) || !Number.isInteger(max)) {
throw new Error('Min and Max must be integers');
}
if (max < min) throw new Error('Max must be greater than or equal to Min');


const url = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;


const response = await axios.get(url, { responseType: 'text' });
const text = (response.data as string).trim();
const value = parseInt(text, 10);


returnData.push({ json: { random: value } });
}
}


return [returnData];
}
}