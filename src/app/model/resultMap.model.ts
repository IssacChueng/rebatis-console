import { ResultMappingModel } from './resultMapping.model';
import { DiscriminatorModel } from './discriminator.model';

export class ResultMapModel {
    id: string;

    type: string;

    resultMappings: ResultMappingModel[];

    idResultMappings: ResultMappingModel[];

    constructorResultMappings: ResultMappingModel[];

    propertyResultMappings: ResultMappingModel[];

    mappedColumns: string[];

    mappedProperties: string[];

    discriminator: DiscriminatorModel;

    hasNestedResultMaps: boolean;

    hasNestedQueries: boolean;

    autoMapping: boolean;

    isResultType: boolean;

    resultTypeClass: string;
}