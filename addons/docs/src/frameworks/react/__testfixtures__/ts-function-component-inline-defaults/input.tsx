import React from 'react';

import { imported } from '../imported';

const local = 'local-value';

interface PropsWriterProps {
  /**
   * Description
   */
  numberRequired: number;
  numberOptional?: number;
  stringRequired: string;
  stringOptional?: string;
  booleanRequired: boolean;
  booleanOptional?: boolean;
  arrayRequired: string[];
  arrayOptional?: string[];
  objectRequired: Record<string, string>;
  objectOptional?: Record<string, string>;
  functionRequired: () => string;
  functionOptional?: () => string;
  dateRequired: Date;
  dateOptional?: Date;
  localReference?: string;
  importedReference?: string;
  globalReference?: any;
  stringGlobalName?: string;
}

/**
 * A component that renders its props
 */
export const PropsWriter: React.FC<PropsWriterProps> = ({
  numberOptional = 1,
  stringOptional = 'stringOptional',
  booleanOptional = false,
  arrayOptional = ['array', 'optional'],
  objectOptional = { object: 'optional' },
  functionOptional = () => 'foo',
  dateOptional = new Date('20 Jan 1983'),
  localReference = local,
  importedReference = imported,
  globalReference = Date,
  stringGlobalName = 'top',
}: PropsWriterProps) => (
  <pre>
    {JSON.stringify({
      numberOptional,
      stringOptional,
      booleanOptional,
      arrayOptional,
      objectOptional,
      functionOptional,
      dateOptional,
      localReference,
      importedReference,
      globalReference,
      stringGlobalName,
    })}
  </pre>
);

export const component = PropsWriter;
