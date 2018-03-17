new Vue ({
    el: '#app',
    data: {
        age: 20,
        name: 'Kanta Paul',
        firstName: 'Pobon',
        lastName: 'Paul',
        inStock: 0,
        password: '',
        cates: [
            {name: 'JS', sub: ['vue', 'react']},
            {name: 'CSS', sub: ['SASS', 'SCSS']},
            {name: 'HTML', sub: ['Jade', 'PUG']}
        ],
        movies: [
            {name: '3 Idiots', country: 'Indian'},
            {name: 'PK', country: 'Indian'},
            {name: 'Sholay', country: 'Indian'}
        ],
        massage: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
    },
    methods: {
        fullName: function() {
            return this.firstName + '  ' + this.lastName;
        },
        fullNames: function(first, last) {
            return {
                name: first + '  ' + last
            }
        },
        fullNamess: function(first, last) {
            return first + '  ' + last;
        },
        changeNameSetter: function () {
            this.myFullName = "Mark Jukerbarg"
        },
        addMovie: function () {
            this.movies.push({
                name: 'Dirty Picture',
                country: 'India'
            })
        }
    },
    computed: {
        myFullName: {
            get: function () {
                return this.firstName + '  ' + this.lastName
            },
            set: function (newvalue) {
                var parts = newvalue.split(' ');
                this.firstName = parts[0];
                this.lastName = parts[parts.length - 1]
            }
        },
        movieFunction: function () {
            return this.movies.map(function (movie) {
                return movie.name +' ('+ movie.country + ')'
            })
        }
    },
    watch: {
        movies: function (movie) {
            var newMovie = movie[movie.length - 1];
            alert('Just add '+ newMovie.name + ' and country is ' + newMovie.country );
        }
    },
    filters: {
        uppercase: function (value, firstCarecter) {
            if (!value) {
                return '';
            }
            if (firstCarecter) {
                return value.toString().charAt(0).toUpperCase() + value.slice(1)
            } else {
                return value.toString().toUpperCase()
            }
        },
        capitalize: function (value){
            if (!value) {
                return '';
            }
            var parts = value.toString().split(' ');
            console.log(parts.join(' '));
            var firstWord = parts.map(function(word) {
                return word.toString().charAt(0).toUpperCase() + word.slice(1)
            })
            return firstWord.join(' ');
        }
    }
});