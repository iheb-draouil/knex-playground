import knex from "knex";

const db = knex({
    client: 'mysql2',
    connection: {
        user: 'root',
        password: '123',
        database: 'dev',
    }
});

(async () => {

    const r1 = await db.table('tests')
    .insert({
        name: 'fff'
    });

    const r2 = await db.table('tests')
    .insert([
        { name: 'ggg' },
        { name: 'hhh' },
    ]);

    const r3 = await db.table('tests')
    .where('id', '>', 5)
    .update({ name: '000' });

    console.log(r3);

    const data = await db.table('tests')
    .where('id', '>', 2);

    console.log(data);

})();