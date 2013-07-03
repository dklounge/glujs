// Generated by CoffeeScript 1.4.0
(function() {

  (glu.ns('ps.notification')).createMockBackend = function(auto, recordNum) {
    var backend, notifications;
    notifications = glu.test.createTable(ps.models.notification, 30);
    backend = glu.test.createBackend({
      defaultRoot: '/json/',
      fallbackToAjax: auto,
      autoRespond: auto,
      routes: {
        'removeNotification': {
          url: 'notifications/action/remove',
          handle: function(req) {
            return notifications.remove(req.params.ids);
          }
        },
        'notificatioSave': {
          url: 'notifications/:id/action/save',
          handle: function(req) {
            return notifications.replace(req.params.id, req.jsonData);
          }
        },
        'notifications': {
          url: 'notifications',
          handle: function(req) {
            var reponse;
            reponse = notifications.list(req.params);
            reponse.success = true;
            return reponse;
          }
        },
        'notification': {
          url: 'notifications/:id',
          handle: function(req) {
            return notifications.get(req.params.id);
          }
        }
      }
    });
    backend.capture();
    return {
      backend: backend,
      notifications: notifications
    };
  };

}).call(this);
