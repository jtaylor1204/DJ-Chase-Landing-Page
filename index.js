$(document).ready(function (){

    let module =  {
        // global element settings
        settings: {
          item: $('.main-nav__item'), // li
          link: $('.main-nav__link'), // a
          current: $('.main-nav__item--active'), // active
          active: $('.main-nav__active'), // underline
          headerHeight: $('#content').outerHeight() // header (for calculations)
        },
    
        init: function() {
          let _ = this;
    
          _.activePlacement(_.settings.current); // default active state
    
          _.settings.link.hover(function() {
            // on hover, move active to hovered element
            _.activePlacement($(this));
          }, function() {
            // on mouse out, move active to current element
            _.activePlacement($('.main-nav__item--active'));
          });
    
        
        // Scroll function
    
          $('#content').on('scroll', function() {
            _.onScroll(_); // initiate scroll listener
          });
    
        },
    
        activePlacement: function(current) {
          // handles positioning of the active underline
          let _ = this,
            pos = current.position(),
            w = current.outerWidth();
    
          _.settings.active.css({
            'left': pos.left,
            'width': w
          });
        },
    
        activeClass: function(parent) {
          // handles maintenance of the currently active class
          let _ = this;
    
          _.settings.item.removeClass('.main-nav__item--active'); // remove all active classes
          parent.addClass('strikethrough'); // place active class on current item
        },
    
        onScroll: function(_) {
          // handles scrolling events
          var scrollPosition = $(document).scrollTop();
    
          _.settings.link.each(function() {
            var $this = $(this),
              $parent = $this.parent('.main-nav__item'),
              target = $($this.attr("href"));
    
            // repurposed logic from https://stanhub.com/sticky-header-change-navigation-active-class-on-page-scroll-with-jquery/
            if ((target.position().top - _.settings.headerHeight) <= scrollPosition &&
              (target.position().top - _.settings.headerHeight + target.height()) > scrollPosition) {
              _.activePlacement($this);
              _.activeClass($parent);
            }
          });
        },
    
        destroy: function() {
          // destroy
        }
      };
      
      module.init();

    });





  