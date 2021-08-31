'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно с нормальными данными', function (assert) {
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

	QUnit.test('Функция работает правильно с нормальными данными', function (assert) {
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

	QUnit.test('Функция работает правильно с данными без анаграмм', function (assert) {
		const input = [
			'тут', 'нет', 'анаграмм'
		];

		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно с различным регистром символов', function (assert) {
		const input = [
			'ПИла', 'ПИЛА', 'ЛИПа'
		];

		const output = [
			['ЛИПа', 'ПИЛА', 'ПИла']
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Почему бы и нет', function (assert) {
		const input = [
			'123', '321', '456'
		];

		const output = [
			['123', '321']
		];
		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Принимает на вход только массив', function (assert) {
		assert.throws(
			() => { anagram("string"); },
			new Error('Input is not an array'),
			'error thrown for string'
		);
		assert.throws(
			() => { anagram(12); },
			new Error('Input is not an array'),
			'error thrown for int'
		);
		assert.throws(
			() => { anagram(true); },
			new Error('Input is not an array'),
			'error thrown for bool'
		);
	});
});
