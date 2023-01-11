-- Verify sitevoiles:initDbMvp on pg

BEGIN;

IF NOT EXISTS (SELECT 1 FROM information_schema.tables
                   WHERE table_name = 'paraglinding') THEN
        RAISE EXCEPTION 'Table items does not exist.';
    END IF;

ROLLBACK;
