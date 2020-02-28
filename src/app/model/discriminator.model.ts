import { ResultMappingModel } from './resultMapping.model';

export class DiscriminatorModel {
    resultMapping: ResultMappingModel;

    discriminatorMap: Map<string, string>;
}