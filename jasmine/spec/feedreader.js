/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('should have url in all feeds', function() {
            for (feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).toBeTruthy()
            };
        });

        it('should have name in all feeds', function() {
            for (feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).toBeTruthy()
            };
        });
    });

    describe('The menu', function() {
        it('should be hiding by default', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        it('should change visibility when clicked', function() {
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBeTruthy();
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    describe('Initial Entries', function() {
        beforeEach(function(done){
            loadFeed(0, function() {
                done();
            });
        });
        it('should have entries in feed', function(done) {
            expect($('.feed').find('.entry').length).not.toBe(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        var content;
        beforeEach(function(done){
            loadFeed(0, function() {
                content = $('.feed').html();
                loadFeed(1, function() {
                    done();
                });
            });
                    });
        it('should have entries in feed', function(done) {
            expect($('.feed').html()).not.toEqual(content);
            done();
        });
    });
}());
