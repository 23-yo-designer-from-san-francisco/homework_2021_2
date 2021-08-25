'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно [1]', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			[ 'барокко', 'коробка' ],
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно [2]', function (assert) {
		const input = [
			'соратница', 'травинка', 'пантокрин',
			'стационар', 'антиквар', 'патронник',
			'тест', 'проверка', 'равктина'
		];

		const output = [
			[ 'антиквар', 'равктина', 'травинка' ],
			[ 'пантокрин', 'патронник' ],
			[ 'соратница', 'стационар' ],
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно [3]', function (assert) {
		const input = [
			'тут', 'нет', 'анаграмм'
		];

		const output = [
			
		];

		assert.deepEqual(anagram(input), output);
	});
});
