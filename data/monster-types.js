class MonsterTypes {
    static DIRECTION_LEFT () { return 'left'; }
    static DIRECTION_RIGHT () { return 'right'; }

    static HARPEE () {
        return { 
            name: 'harpee',
            velocity: -450,
            direction: MonsterTypes.DIRECTION_LEFT 
        }; 
    }

    static PINKMAN () {
        return {
            name: 'pinkman',
            velocity: 120,
            direction: MonsterTypes.DIRECTION_RIGHT
        };
    }

    static MUSHROOM () {
        return {
            name: 'mushroom',
            velocity: -150,
            direction: MonsterTypes.DIRECTION_LEFT
        };
    }

    static GREEN_PEAS () {
        return {
            name: 'green_peas',
            velocity: 80,
            direction: MonsterTypes.DIRECTION_RIGHT
        };
    }

    static HARPEE_RIGHT () {
        return {
            name: 'harpee_right',
            velocity: 450,
            direction: MonsterTypes.DIRECTION_RIGHT
        };
    }

    static MONSTER_TYPES () {   
        return [
            MonsterTypes.HARPEE(),
            MonsterTypes.PINKMAN(),
            MonsterTypes.MUSHROOM(),
            MonsterTypes.GREEN_PEAS(),
            MonsterTypes.HARPEE_RIGHT()
        ];
    }
}