# Types

## `node`
This is the set of abstract types, that will be returned in the API calls. Any implementation is responsible for converting propertiary types into this format, by stripping unneeded parameters, or mapping some of them.

## `peka`
This is the set of PEKA (Poznań) implementation types, returned by their server. They are later mapped into the Node types by the implementation.

## `responses`
Contains types of whole API responses - both abstract and returned by the implementation.