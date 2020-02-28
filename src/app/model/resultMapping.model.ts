export class ResultMappingModel {
    property: string;

    column: string;

    javaType: string;

    jdbcType: string;

    typeHandler: string;

    typeHandlerParameter: string;

    nestedResultMapId: string;

    nestedQueryId: string;

    notNullColumns: string[];

    columnPrefix: string;

    flags: string[];

    composites: ResultMappingModel[];

    resultSet: string;

    foreignColumn: string;

    lazy: boolean;
}