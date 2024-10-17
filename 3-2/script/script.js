// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return {
            count: 1
        };
    },
    kakeru() {
        this.count * 2;
    },
    waru() {
        this.count / 2;
    }
});