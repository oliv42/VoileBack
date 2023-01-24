-- Revert sitevoiles:initDbMvp from pg

BEGIN;

DROP TABLE
    "paraglider";

COMMIT;
