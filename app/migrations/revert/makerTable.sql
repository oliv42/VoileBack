-- Revert sitevoiles:makerTable from pg

BEGIN;

DROP TABLE
    "paraglider",
    "maker";

COMMIT;
