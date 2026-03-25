import * as migration_20260322_233106_initial from './20260322_233106_initial';
import * as migration_20260325_093217_add_chtoto_tam_for_users_table from './20260325_093217_add_chtoto_tam_for_users_table';

export const migrations = [
  {
    up: migration_20260322_233106_initial.up,
    down: migration_20260322_233106_initial.down,
    name: '20260322_233106_initial',
  },
  {
    up: migration_20260325_093217_add_chtoto_tam_for_users_table.up,
    down: migration_20260325_093217_add_chtoto_tam_for_users_table.down,
    name: '20260325_093217_add_chtoto_tam_for_users_table'
  },
];
