import { type ApiTableRow } from '@site/components/ApiTable';
export const rows: ApiTableRow[] = [
  {
    prop: 'href',
    desc: 'link address',
    type: 'string',
    required: true,
    default: '-',
  },
  {
    prop: 'size',
    desc: 'link size',
    type: 'tag: tiny | small | medium | large',
    required: false,
    default: 'medium',
  },
  {
    prop: 'disabled',
    desc: 'whether set link disabled',
    type: 'boolean',
    required: false,
    default: 'false',
  },
  {
    prop: 'isBlock',
    desc: 'whether set link as block width hover effect',
    type: 'boolean',
    required: false,
    default: 'false',
  },
  {
    prop: 'isBlank',
    desc: 'whether open in new tab',
    type: 'boolean',
    required: false,
    default: 'false',
  },
  {
    prop: 'anchorIcon',
    desc: 'link icon',
    type: 'React.ReactNode',
    required: false,
    default: '-',
  },
  {
    prop: 'className',
    type: 'string',
    required: false,
    default: '-',
  },
  {
    prop: 'style',
    type: 'React.CssProperties',
    required: false,
    default: '-',
  },
  {
    prop: 'onClick',
    desc: 'click event',
    type: '() => void',
    required: false,
    default: '-',
  },
];