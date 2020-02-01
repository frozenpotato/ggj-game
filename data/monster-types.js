class MonsterTypes {
    static HARPEE () { return 'harpee'; }
    static PINKMAN () { return 'pinkman'; }
    static MUSHROOM () { return 'mushroom'; }
    static GREEN_PEAS () { 'green_peas'; }

    static DIRECTION_LEFT () { return 'left'; }
    static DIRECTION_RIGHT () { return 'right'; }

    static MONSTER_TYPES () {   
        return [
            { type: MonsterTypes.HARPEE(), direction: MonsterTypes.DIRECTION_LEFT() },
            { type: MonsterTypes.PINKMAN(), direction: MonsterTypes.DIRECTION_RIGHT() },
            { type: MonsterTypes.MUSHROOM(), direction: MonsterTypes.DIRECTION_LEFT() },
            { type: MonsterTypes.GREEN_PEAS(), direction: MonsterTypes.DIRECTION_RIGHT() }
        ];
    }
}