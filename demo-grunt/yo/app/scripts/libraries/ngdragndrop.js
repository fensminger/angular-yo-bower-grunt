/**
 * Angular Drag&Drop module
 *
 * author:        Luis Carlos Osorio Jayk
 * authorEmail:   luiscarlosjayk(a)gmail(dot)com
 *
 * Provides an angular module with draggable and droppable directives
 * using HTML5 drag&drop capabilities.
 */
(function(window, angular, jQuery, undefined) {

var dragndrop = angular.module('DragAndDrop', [])
  
  /**
   * Draggable
   */
  .directive('draggable', [
    '$parse',
    function($parse) {
      return {
        restrict: 'A',
        scope: false, // Otherwise children elements wouldn't reach parent scope
        link: function($scope, element, attrs) {
          var data          = $parse(attrs['draggable'])($scope),
              dropOn        = $scope.$eval(attrs['dropOn']) || null,
              dragImageAttr = $scope.$eval(attrs['dragImage']),
              dragImage     = (angular.isArray(dragImageAttr)) ? dragImageAttr[0] : dragImageAttr,
              dragImageX    = (angular.isArray(dragImageAttr) && dragImageAttr.length > 1) ?  dragImageAttr[1] : 0,
              dragImageY    = (angular.isArray(dragImageAttr) && dragImageAttr.length > 2) ?  dragImageAttr[2] : 0,
              effectAllowed = attrs['effectAllowed'],
              // user events
              userOnDragStart = $parse(attrs['onDragStart'])($scope),
              userOnDrag      = $parse(attrs['onDrag'])($scope),
              userOnDragEnd   = $parse(attrs['onDragEnd'])($scope);
          
          if (angular.isUndefined(data) || data == null)
            throw new Error('draggable directive requires attribute \'draggable\' to be set on scope on element while undefined given.');
          
          // MouseEnter
          var originalCursor = element.css('cursor');
          element.bind('mouseenter', function() {
            element.css('cursor', 'move');
          });
          
          // MouseLeave
          element.bind('mouseleave', function() {
            element.css('cursor', originalCursor);
          });
          
          // DragStart
          element.bind('dragstart', function(ev) {
              var originalEv = jQuery ? ev.originalEvent : ev;

            if (!!dragImage) {
              // This requires an image element to be created
              var dragIcon      = angular.element('<img />');
                  dragIcon.prop('src', dragImage);
              
              originalEv.dataTransfer.setDragImage(dragIcon[0], dragImageX, dragImageY);
            }
            
            if (!!effectAllowed)
              originalEv.dataTransfer.effectAllowed = effectAllowed;
              
            // Set data
            originalEv.dataTransfer.setData('text/plain', angular.toJson(data));
            originalEv.dataTransfer.setData('dropOn', angular.toJson(dropOn));
            
            // user onDragStart defined function
            if (angular.isFunction(userOnDragStart))
              userOnDragStart(originalEv);
          });
          
          // Drag
          element.bind('drag', function(ev) {
            
            // user onDrag defined function
            if (angular.isFunction(userOnDrag)) {
                var originalEv  = jQuery ? ev.originalEvent : ev;
                userOnDrag(originalEv);
            }
          });
          
          // DragEnd
          element.bind('dragend', function(ev) {
            
            // user onDragEnd defined function
            if (angular.isFunction(userOnDragEnd)) {
                var originalEv  = jQuery ? ev.originalEvent : ev;
                userOnDragEnd(originalEv);
            }
          });
          
          element.prop('draggable', true);
        }
      }
    }
  ])
  
  /**
   * Droppable
   */
  .directive('droppable', [
    '$parse',
    function($parse) {
      return {
        restrict: 'A',
        scope: false, // Otherwise children elements wouldn't reach parent scope
        link: function($scope, element, attrs) {
          var effectAllowed = attrs['effectAllowed'],
              dropId        = $scope.$eval(attrs['dropId']) || attrs['dropId'] || null,
          // user events
              userOnDragEnter = $parse(attrs['onDragEnter'])($scope),
              userOnDragLeave = $parse(attrs['onDragLeave'])($scope),
              userOnDragOver  = $parse(attrs['onDragOver'])($scope);
              userOnDrop      = $parse(attrs['onDrop'])($scope);
          
          // DragEnter
          element.bind('dragenter', function(ev) {
            
            // user onDragEnter defined function
            if (angular.isFunction(userOnDragEnter)) {
                var originalEv  = jQuery ? ev.originalEvent : ev;
                userOnDragEnter(originalEv);
            }
          });
          
          // DragLeave
          element.bind('dragleave', function(ev) {
            
            // uset onDragLeave defined function
            if (angular.isFunction(userOnDragLeave)) {
                var originalEv  = jQuery ? ev.originalEvent : ev;
                userOnDragLeave(originalEv);
            }
          });
          
          // DragOver
          element.bind('dragover', function(ev) {
            ev.preventDefault(); // Allow dropping on this element
            // uset onDragOver defined function
            if (angular.isFunction(userOnDragOver)) {
                var originalEv  = jQuery ? ev.originalEvent : ev;
                userOnDragOver(originalEv);
            }

            return false;
          });
          
          // Drop
          element.bind('drop', function(ev) {
            ev.stopPropagation(); // Stop some browsers from redirecting
            ev.preventDefault();
            var originalEv  = jQuery ? ev.originalEvent : ev,
                canDropHere = true; // Flag to verify if this element can be dropped here
            
            // Verify this element can be dropped here
            var dropOn = angular.fromJson(originalEv.dataTransfer.getData('dropOn'));
            
            if (!!dropId && !!dropOn)
              if (angular.isArray(dropOn))
                canDropHere = (dropOn.indexOf(dropId) != -1); // Is dropId in the list of dropOn : where this element wants to be dragged only
              else if (angular.isString(dropOn) || angular.isNumber(dropOn))
                canDrophere = (dropOn == dropId);
            
            if (!canDropHere)
              return false; // This cannot be dropped here.
            
            var data;
            if (originalEv.dataTransfer.files.length > 0)
              data = originalEv.dataTransfer.files;
            else
              data = angular.fromJson(originalEv.dataTransfer.getData('text/plain'));
            
            // uset onDrop defined function
            if (angular.isFunction(userOnDrop)) {
                var originalEv  = jQuery ? ev.originalEvent : ev;
                userOnDrop(data, originalEv);
            }

            return false;
          });
          
        }
      }
    }
  ])
  
  ;

})(window, window.angular, window.jQuery);