-- Revert sitevoiles:initDbMvp from pg

BEGIN;

DROP TABLE
    "paraglinding";

COMMIT;
